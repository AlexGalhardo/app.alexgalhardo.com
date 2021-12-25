import Bcrypt from '@helpers/Bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Users {
    getAll() {
        return prisma.user.findMany();
    }

    getTotal() {
        return prisma.user.count();
    }

    getById(user_id: string) {
        return prisma.user.findUnique({
            where: {
                id: user_id,
            },
        });
    }

    verifyIfAdminById(user_id: string) {
        return prisma.user.findUnique({
            where: {
                isAdmin: {
                    id: user_id,
                    admin: true,
                },
            },
        });
    }

    getUserByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    emailRegistred(email: string) {
        const emailExists = prisma.user.findUnique({
            where: {
                email,
            },
        });

        return !!emailExists;
    }

    async login(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        return (await Bcrypt.compare(password, user?.password)) ? user : null;
    }

    async emailIsConfirmed(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                emailConfirmed: {
                    email,
                    confirmed_email: true,
                },
            },
        });

        return !!user;
    }

    async update(userObject) {
        const userExist = await prisma.user.findUnique({
            where: {
                email: userObject.email,
            },
        });

        if (await Bcrypt.compare(userObject.password, userExist.password)) {
            await prisma.user.update({
                where: {
                    email: userExist?.email,
                },
                data: {
                    email: userObject.new_email,
                    password: await Bcrypt.hash(userObject.new_password),
                    document: userObject.document,
                    phone: userObject.phone,
                    birth_date: userObject.birth_date,
                    address_zipcode: userObject.zipcode,
                    address_street: userObject.street,
                    address_street_number: userObject.street_number,
                    address_neighborhood: userObject.neighborhood,
                    address_city: userObject.city,
                    address_state: userObject.state,
                    address_country: userObject.country,
                },
            });

            const user = await prisma.user.findUnique({
                where: {
                    email: userObject.new_email,
                },
            });

            return !!user;
        }
    }

    async createStripeCustomer(user_id: string, stripe_customer_id: string) {
        await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                stripe_customer_id,
            },
        });
    }

    async createStripeCard(user_id: string, customerCard) {
        await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                stripe_card_number: customerCard.number,
                stripe_card_exp_month: customerCard.card_exp_month,
                stripe_card_exp_year: customerCard.exp_year,
            },
        });
    }

    async createStripeSubscription(
        user_id: string,
        planName: string,
        subscriptionObject
    ) {
        await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                stripe_currently_subscription_id:
                    subscriptionObject.transaction_id,
                stripe_currently_subscription_name:
                    subscriptionObject.plan_name,
                stripe_subscription_start:
                    subscriptionObject.current_period_start,
                stripe_subscription_end: subscriptionObject.current_period_end,
                stripe_cancel_at_period_end:
                    subscriptionObject.cancel_at_period_end,
            },
        });
    }
}

export default new Users();
