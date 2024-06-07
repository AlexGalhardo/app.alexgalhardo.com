import prisma from "../config/prisma";
import Bcrypt from "../utils/Bcrypt";
import { CreateUserDTO, UpdateUserDTO } from "../utils/DTOs";

export default class UsersRepository {
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

    static isAdmin(id: string) {
        return prisma.user.findUnique({
            where: {
                isAdmin: {
                    id,
                    admin: true,
                },
            },
        });
    }

    static getByEmail(email: string) {
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

    static async verifyPassword(user_id: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                id: user_id,
            },
        });

        return !!(await Bcrypt.compare(password, user?.password as string));
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

    static async update(userObject: UpdateUserDTO) {
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

    static async store(userObject: CreateUserDTO, confirmEmailToken: string) {
        return prisma.user.create({
            data: {
                name: userObject.username,
                email: userObject.email,
                password: await Bcrypt.hash(userObject.password),
                confirm_email_token: confirmEmailToken,
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
        if (await this.emailRegistred(email)) {
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
