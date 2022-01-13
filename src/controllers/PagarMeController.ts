import { Request, Response } from 'express';
import pagarme from 'pagarme';

import Games from '../models/Games';

class PagarMeController {
    async checkoutGame(req: Request, res: Response) {
        const { game_id } = req.params;
        const game = await Games.getById(game_id);

        try {
            const PagarMe = await pagarme.client.connect({
                api_key: process.env.PAGARME_AK_TEST,
            });
            const pagarmeCheckoutObject = await PagarMe.paymentLinks.create({
                amount: game.price,
                items: [
                    {
                        id: `${game.id}`,
                        title: `${game.title}`,
                        unit_price: game.price,
                        quantity: 1,
                        tangible: true,
                    },
                ],
                payment_config: {
                    boleto: {
                        enabled: true,
                        expires_in: 5,
                    },
                    credit_card: {
                        enabled: true,
                        free_installments: 0,
                        interest_rate: 1,
                        max_installments: 1,
                    },
                    default_payment_method: 'credit_card',
                },
                max_orders: 1,
                expires_in: 5,
            });

            return res.redirect(pagarmeCheckoutObject.url);
        } catch (error) {
            console.log(JSON.stringify(error));
            throw new Error(error);
        }
    }
}

export default new PagarMeController();
