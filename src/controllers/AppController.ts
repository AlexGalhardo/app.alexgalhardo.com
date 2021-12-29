/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * http://localhost:3000/
 */

import { Request, Response } from 'express';

import Header from '../helpers/Header';

class AppController {
    getViewProjects(req: Request, res: Response) {
        res.render('pages/projects', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.projects(),
        });
    }

    getViewBank(req: Request, res: Response) {
        res.render('pages/bank', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.bank(),
        });
    }

    getViewToDo(req: Request, res: Response) {
        res.render('pages/toDo', {
            flash_success: req.flash('success'),
            flash_warning: req.flash('warning'),
            user: SESSION_USER,
            header: Header.toDo(),
        });
    }

    getViewAbout(req: Request, res: Response) {
        return res.render('pages/about', {
            user: SESSION_USER,
            header: Header.about(),
        });
    }

    getViewPrivacy(req: Request, res: Response) {
        return res.render('pages/privacy', {
            user: SESSION_USER,
            header: Header.privacy(),
        });
    }
}

export default new AppController();
