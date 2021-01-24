import bcrypt from 'bcrypt';
import { AbstractRoute } from '../abstract_route';
import { Acc } from '../../sqlz/models/acc';
import accCtrl from '../../ctlr/auth.ctrl';
import { ResponseData } from '../../ctlr/ctrl.response';

class SignIn extends AbstractRoute {
    acc: Acc;

    async middleware(req: any, res: any, next: Function): Promise<void> {
        const result = await accCtrl.get(1);
        
        if (result.succsess) {
            this.acc = (result as ResponseData).data;
            next();
        } else {
            next('auth_not_found');
        }
    }

    happy(req: any, res: any, next: Function): void {
        res.send(this.acc);
    }
}

export default new SignIn('sign-in', 'POST');