/* eslint-disable radix */
import { PrismaClient } from "@prisma/client";

import Bcrypt from "../helpers/Bcrypt";
import { inputCreateUser, inputSubscriptionTransactionObject, inputUpdateUser } from "../helpers/InputTypes";

const prisma = new PrismaClient();

export default class Users {
    static getAll() {
        return prisma.user.findMany();
    }

    static getTotal() {
        return prisma.user.count();
    }

    static getById(user_id: string) {
        return prisma.user.findUnique({
            where: {
                id: user_id,
            },
        });
    }

    static verifyIfAdminById(user_id: string) {
        return prisma.user.findUnique({
            where: {
                isAdmin: {
                    id: user_id,
                    admin: true,
                },
            },
        });
    }

    static getUserByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    static emailRegistred(email: string) {
        const emailExists = prisma.user.findUnique({
            where: {
                email,
            },
        });

        return !!emailExists;
    }

    static async login(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) return false;

        return (await Bcrypt.compare(password, user?.password)) ? user : null;
    }

    static async updateAvatarName(avatarLink: string, userId: string) {
        return prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                avatar: avatarLink,
            },
        });
    }

    static async verifyPassword(user_id: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                id: user_id,
            },
        });

        return !!(await Bcrypt.compare(password, user?.password));
    }

    static async emailIsConfirmed(email: string) {
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

    static async update(userObject: inputUpdateUser) {
        const User = await prisma.user.findUnique({
            where: {
                id: userObject.id,
            },
        });

        if (User && (await Bcrypt.compare(userObject.older_password, User.password))) {
            await prisma.user.update({
                where: {
                    id: User?.id,
                },
                data: {
                    email: userObject.email ? userObject.email : User.email,
                    password: userObject.new_password ? await Bcrypt.hash(userObject.new_password) : User.password,
                    document: userObject.document ? userObject.document : User.document,
                    phone: userObject.phone ? userObject.phone : User.phone,
                    birth_date: userObject.birth_date ? userObject.birth_date : User.birth_date,
                    address_zipcode: userObject.address_zipcode,
                    address_street: userObject.address_street,
                    address_street_number: parseInt(userObject.address_street_number),
                    address_neighborhood: userObject.address_neighborhood,
                    address_city: userObject.address_city,
                    address_state: userObject.address_state,
                    address_country: userObject.address_country,
                },
            });

            const user = await prisma.user.findUnique({
                where: {
                    email: userObject.email,
                },
            });

            return !!user;
        }
        return null;
    }

    static async create(userObject: inputCreateUser, confirmEmailToken: string) {
        return prisma.user.create({
            data: {
                name: userObject.username,
                email: userObject.email,
                password: await Bcrypt.hash(userObject.password),
                confirm_email_token: confirmEmailToken,
            },
        });
    }

    static async createStripeCustomer(user_id: string, stripe_customer_id: string) {
        await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                stripe_customer_id,
            },
        });
    }

    static async createStripeCard(
        user_id: string,
        customerCard: { card: { id: string; brand: string; exp_month: number; exp_year: number; last4: number } },
        cardNumber: string,
    ) {
        await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                stripe_card_id: customerCard.card.id,
                stripe_card_brand: customerCard.card.brand,
                stripe_card_number: cardNumber,
                stripe_card_exp_month: customerCard.card.exp_month,
                stripe_card_exp_year: customerCard.card.exp_year,
                stripe_card_last4: Number(customerCard.card.last4 as number),
            },
        });
    }

    static async createStripeSubscription(
        user_id: string,
        subscriptionTransactionObject: inputSubscriptionTransactionObject,
    ) {
        await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                stripe_currently_subscription_id: subscriptionTransactionObject.transaction_id,
                stripe_currently_subscription_name: subscriptionTransactionObject.plan_name,
                stripe_subscription_start: subscriptionTransactionObject.current_period_start,
                stripe_subscription_end: subscriptionTransactionObject.current_period_end,
                stripe_cancel_at_period_end: subscriptionTransactionObject.cancel_at_period_end,
            },
        });
    }

    static async emailExists(email: string) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    static async createResetPasswordToken(email: string, resetPasswordToken: string) {
        await prisma.user.update({
            where: {
                email,
            },
            data: {
                reset_password_token: resetPasswordToken,
            },
        });
    }

    static resetPasswordTokenIsValid(email: string, resetPasswordToken: string) {
        return prisma.user.findUnique({
            where: {
                resetPasswordTokenIsValid: {
                    email,
                    reset_password_token: resetPasswordToken,
                },
            },
        });
    }

    static async resetPassword(email: string, newPassword: string) {
        return prisma.user.update({
            where: {
                email,
            },
            data: {
                password: await Bcrypt.hash(newPassword),
                reset_password_token: null,
            },
        });
    }

    static verifyIfEmailIsConfirmed(email: string) {
        return prisma.user.findUnique({
            where: {
                emailConfirmed: {
                    email,
                    confirmed_email: true,
                },
            },
        });
    }

    static async createConfirmEmailToken(email: string, confirmEmailToken: string) {
        await prisma.user.update({
            where: {
                email,
            },
            data: {
                confirm_email_token: confirmEmailToken,
            },
        });
    }

    static async verifyConfirmEmailToken(email: string, confirmEmailToken: string) {
        if (await this.emailExists(email)) {
            if (
                await prisma.user.findUnique({
                    where: {
                        confirmEmailTokenIsValid: {
                            email,
                            confirm_email_token: confirmEmailToken,
                        },
                    },
                })
            ) {
                return prisma.user.update({
                    where: {
                        email,
                    },
                    data: {
                        confirm_email_token: null,
                        confirmed_email: true,
                    },
                });
            }
        }
        return false;
    }

    static async verifyLoginGitHub(githubId: number, email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (user && !user?.github_id) {
            await prisma.user.update({
                where: {
                    email,
                },
                data: {
                    github_id: githubId,
                },
            });
        }

        return prisma.user.findUnique({
            where: {
                githubLogin: {
                    github_id: githubId,
                    email,
                },
            },
        });
    }

    static async verifyLoginGoogle(googleId: string, email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (user && !user?.google_id) {
            await prisma.user.update({
                where: {
                    email,
                },
                data: {
                    google_id: googleId,
                },
            });
        }

        return prisma.user.findUnique({
            where: {
                googleLogin: {
                    google_id: googleId,
                    email,
                },
            },
        });
    }

    static async verifyLoginFacebook(facebookId: string, email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (user && !user?.facebook_id) {
            await prisma.user.update({
                where: {
                    email,
                },
                data: {
                    facebook_id: facebookId,
                },
            });
        }

        return prisma.user.findUnique({
            where: {
                facebookLogin: {
                    facebook_id: facebookId,
                    email,
                },
            },
        });
    }
}
