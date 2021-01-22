import { AbstractRoute } from '../abstract_route';
import { Acc } from '../../sqlz/models/acc';
import accCtrl from '../../ctlr/ctrl.auth';

class Login extends AbstractRoute {
    acc: Acc;

    async middleware(req: any, res: any, next: Function): Promise<void> {
        let acc = await accCtrl.getAcc(1);
        if (acc) {
            this.acc = acc;
            next();
        } else {
            next('auth_not_found');
        }
    }

    async end(req: any, res: any, next: Function): Promise<void> {
        res.send(this.acc);
    }
}

export default new Login('login', 'POST');