import { AbstractRoute } from '../abstract_route';
import { Acc } from '../../sqlz/models/acc';
import accCtrl from '../../ctlr/auth.ctrl';
import { ResponseData, ResponseError } from '../../ctlr/ctrl.response';

class SignUp extends AbstractRoute {
    acc: Acc;

    async middleware(req: any, res: any, next: Function): Promise<void> {
        const result = await accCtrl.create(req.body);
        
        if (result.succsess) {
            this.acc = (result as ResponseData).data;
            next();
        } else {
            next({
                key: 'auth_conflict_data',
                err: (result as ResponseError).err
            });
        }
    }

    async happy(req: any, res: any, next: Function): Promise<void> {
        res.send(this.acc);
    }
}

export default new SignUp('sign-up', 'POST');