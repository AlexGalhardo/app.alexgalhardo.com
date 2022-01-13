import express from 'express';

import Logger from '../config/winston';

const router = express.Router();

export default router
    .get('/logger', (req, res) => {
        Logger.error('This is an error log');
        Logger.warn('This is a warn log');
        Logger.info('This is a info log');
        Logger.http('This is a http log');
        Logger.debug('This is a debug log');

        return res.send('Logger tested');
    })

    .get('/flash', (req, res) => {
        res.render('pages/tests/flash', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
        });
    })

    .get('/flash/success', (req, res) => {
        req.flash('success', 'SUCCESS!!');
        res.redirect('/test/flash');
    })

    .get('/flash/warning', (req, res) => {
        req.flash('warning', 'WARNING!!');
        res.redirect('/test/flash');
    });
