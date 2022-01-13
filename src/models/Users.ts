/* eslint-disable radix */
import { PrismaClient } from '@prisma/client';

import Bcrypt from '../helpers/Bcrypt';
import Number from '../helpers/Number';

const prisma = new PrismaClient();

type inputCreateUser = {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
    github_id: string;
    facebook_id: string;
    google_id: string;
};

type inputUpdateUser = {
    id: string;
    email: string;
    older_password: string;
    new_password: string;
    document: string;
    phone: string;
    birth_date: string;
    address_zipcode: string;
    address_street: string;
    address_street_number: string;
    address_neighborhood: string;
    address_city: string;
    address_state: string;
    address_country: string;
};

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

        if (!user) return false;

        return (await Bcrypt.compare(password, user?.password)) ? user : null;
    }

    async verifyPassword(user_id: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                id: user_id,
            },
        });

        return !!(await Bcrypt.compare(password, user?.password));
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

    async update(userObject: inputUpdateUser) {
        const userExist = await prisma.user.findUnique({
            where: {
                id: userObject.id,
            },
        });

        if (
            await Bcrypt.compare(userObject.older_password, userExist.password)
        ) {
            await prisma.user.update({
                where: {
                    id: userExist?.id,
                },
                data: {
                    email: userObject.email
                        ? userObject.email
                        : userExist.email,
                    password: userObject.new_password
                        ? await Bcrypt.hash(userObject.new_password)
                        : userExist.password,
                    document: userObject.document
                        ? userObject.document
                        : userExist.document,
                    phone: userObject.phone
                        ? userObject.phone
                        : userExist.phone,
                    birth_date: userObject.birth_date
                        ? userObject.birth_date
                        : userExist.birth_date,
                    address_zipcode: userObject.address_zipcode,
                    address_street: userObject.address_street,
                    address_street_number: parseInt(
                        userObject.address_street_number
                    ),
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
        return false;
    }

    async create(userObject: inputCreateUser, confirmEmailToken: string) {
        return prisma.user.create({
            data: {
                name: userObject.username,
                email: userObject.email,
                password: await Bcrypt.hash(userObject.password),
                github_id: userObject.github_id,
                facebook_id: userObject.facebook_id,
                google_id: userObject.google_id,
                confirm_email_token: confirmEmailToken,
                avatar: 'https://milvus.online/wp-content/uploads/2017/05/avatar-default.jpg',
            },
        });
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

    async createStripeCard(user_id: string, customerCard, cardNumber: string) {
        await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                stripe_card_id: customerCard.card.id,
                stripe_card_brand: customerCard.card.brand,
                stripe_card_number: cardNumber,
                stripe_card_exp_month: parseInt(customerCard.card.exp_month),
                stripe_card_exp_year: parseInt(customerCard.card.exp_year),
                stripe_card_last4: parseInt(customerCard.card.last4),
            },
        });
    }

    async createStripeSubscription(user_id: string, subscriptionObject) {
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

    async addGameToShopCart(game_id: string): boolean {
        let { shop_cart_itens } = await prisma.user.findUnique({
            where: {
                id: SESSION_USER.id,
            },
            select: {
                shop_cart_itens: true,
            },
        });

        // console.log('shop_cart_itens =>', shop_cart_itens);

        const game = await prisma.game.findUnique({
            where: {
                id: game_id,
            },
            select: {
                id: true,
                image: true,
                title: true,
                price: true,
            },
        });

        if (!shop_cart_itens) {
            const shopCartItens = [];

            shopCartItens.push(game);

            await prisma.user.update({
                where: {
                    id: SESSION_USER.id,
                },
                data: {
                    shop_cart_itens: JSON.stringify(shopCartItens),
                },
            });

            return true;
        }

        shop_cart_itens = JSON.parse(shop_cart_itens);

        // game already in cart, remove
        if (shop_cart_itens.some((game) => game.id === game_id)) {
            const indexToRemove = shop_cart_itens.findIndex(function (game) {
                return game.id === game_id;
            });

            shop_cart_itens.splice(indexToRemove, 1);

            await prisma.user.update({
                where: {
                    id: SESSION_USER.id,
                },
                data: {
                    shop_cart_itens: JSON.stringify(shop_cart_itens),
                },
            });

            return false;
        }

        // game not in cart, add
        shop_cart_itens.push(game);
        await prisma.user.update({
            where: {
                id: SESSION_USER.id,
            },
            data: {
                shop_cart_itens: JSON.stringify(shop_cart_itens),
            },
        });
        return true;
    }

    async removeShopCartItem(item_id: string): boolean {
        let { shop_cart_itens } = await prisma.user.findUnique({
            where: {
                id: SESSION_USER.id,
            },
            select: {
                shop_cart_itens: true,
            },
        });

        shop_cart_itens = JSON.parse(shop_cart_itens);

        // game already in cart, remove
        if (shop_cart_itens.some((item) => item.id === item_id)) {
            const indexToRemove = shop_cart_itens.findIndex(function (item) {
                return item.id === item_id;
            });

            shop_cart_itens.splice(indexToRemove, 1);

            await prisma.user.update({
                where: {
                    id: SESSION_USER.id,
                },
                data: {
                    shop_cart_itens: JSON.stringify(shop_cart_itens),
                },
            });

            return true;
        }

        return false;
    }

    async getTotalItensShopCart(): number {
        if (SESSION_USER) {
            let { shop_cart_itens } = await prisma.user.findUnique({
                where: {
                    id: SESSION_USER.id,
                },
                select: {
                    shop_cart_itens: true,
                },
            });

            shop_cart_itens = JSON.parse(shop_cart_itens);
            return shop_cart_itens?.length || 0;
        }
        return 0;
    }

    async getShopCartItens(): Array {
        if (SESSION_USER) {
            let { shop_cart_itens } = await prisma.user.findUnique({
                where: {
                    id: SESSION_USER.id,
                },
                select: {
                    shop_cart_itens: true,
                },
            });

            shop_cart_itens = JSON.parse(shop_cart_itens);
            if (shop_cart_itens && shop_cart_itens.length > 0) {
                shop_cart_itens.forEach(
                    (item) => (item.price = Number.toFloat(item.price))
                );
                return shop_cart_itens;
            }
            return null;
        }
        return null;
    }

    async getShopCartTotalAmount(): Promise<number> {
        if (SESSION_USER) {
            let { shop_cart_itens } = await prisma.user.findUnique({
                where: {
                    id: SESSION_USER.id,
                },
                select: {
                    shop_cart_itens: true,
                },
            });

            shop_cart_itens = JSON.parse(shop_cart_itens);

            if (shop_cart_itens && shop_cart_itens.length > 0) {
                const shopCartTotalAmount = shop_cart_itens.reduce(
                    (sum, { price }) => sum + price,
                    0
                );

                return Number.toFloat(shopCartTotalAmount);
            }

            return 0;
        }
        return 0;
    }

    async removeAllShopCartItens(): Promise<void> {
        await prisma.user.update({
            where: {
                id: SESSION_USER.id,
            },
            data: {
                shop_cart_itens: null,
            },
        });
    }

    async emailExists(email: string) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    async createResetPasswordToken(email: string, resetPasswordToken: string) {
        await prisma.user.update({
            where: {
                email,
            },
            data: {
                reset_password_token: resetPasswordToken,
            },
        });
    }

    resetPasswordTokenIsValid(email: string, resetPasswordToken: string) {
        return prisma.user.findUnique({
            where: {
                resetPasswordTokenIsValid: {
                    email,
                    reset_password_token: resetPasswordToken,
                },
            },
        });
    }

    async resetPassword(email: string, newPassword: string) {
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

    verifyIfEmailIsConfirmed(email: string) {
        return prisma.user.findUnique({
            where: {
                emailConfirmed: {
                    email,
                    confirmed_email: true,
                },
            },
        });
    }

    async createConfirmEmailToken(email: string, confirmEmailToken: string) {
        await prisma.user.update({
            where: {
                email,
            },
            data: {
                confirm_email_token: confirmEmailToken,
            },
        });
    }

    async verifyConfirmEmailToken(email: string, confirmEmailToken: string) {
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
}

export default new Users();
