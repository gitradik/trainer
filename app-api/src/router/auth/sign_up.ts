import { AbstractRoute } from '../abstract_route';
import { Acc, AccModel } from '../../sqlz/models/acc';
import accCtrl from '../../ctlr/auth.ctrl';

class SignUp extends AbstractRoute {
    acc: Acc;

    async middleware(req: any, res: any, next: Function): Promise<void> {
        let acc = await accCtrl.create(req.body);
        if (acc) {
            this.acc = acc;
            next();
        } else {
            next('auth_conflict_data');
        }
    }

    async happy(req: any, res: any, next: Function): Promise<void> {
        res.send(this.acc);
    }
}

export default new SignUp('sign-up', 'POST');