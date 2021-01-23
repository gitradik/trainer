import bcrypt from 'bcrypt';
import { AbstractRoute } from '../abstract_route';
import { Acc, AccModel } from '../../sqlz/models/acc';
import accCtrl from '../../ctlr/auth.ctrl';

class Login extends AbstractRoute {
    acc: Acc;

    async middleware(req: any, res: any, next: Function): Promise<void> {
        let acc = await accCtrl.get(1);
        if (acc) {
            this.acc = acc;
            next();
        } else {
            next('auth_not_found');
        }
    }

    happy(req: any, res: any, next: Function): void {
        res.send(this.acc);
    }
}

export default new Login('login', 'POST');