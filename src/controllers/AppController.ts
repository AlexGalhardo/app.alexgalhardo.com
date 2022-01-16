import { Request, Response } from 'express';

import Header from '../helpers/Header';

export default class AppController {
    static getViewProjects(req: Request, res: Response) {
        res.render('pages/projects', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: global.SESSION_USER,
            header: Header.projects(),
        });
    }

    static getViewBank(req: Request, res: Response) {
        res.render('pages/bank', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: global.SESSION_USER,
            header: Header.bank(),
        });
    }

    static getViewToDo(req: Request, res: Response) {
        res.render('pages/toDo', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: global.SESSION_USER,
            header: Header.toDo(),
        });
    }

    static getViewAbout(req: Request, res: Response) {
        return res.render('pages/about', {
            user: global.SESSION_USER,
            header: Header.about(),
        });
    }

    static getViewPrivacy(req: Request, res: Response) {
        return res.render('pages/privacy', {
            user: global.SESSION_USER,
            header: Header.privacy(),
        });
    }
}
