import jwt from 'jsonwebtoken';
import { AbstractRoute } from '../abstract_route';
import { AccModel, AccShemas } from '../../sqlz/models/acc';
import accCtrl from '../../ctlr/auth.ctrl';
import { ResponseData } from '../../ctlr/ctrl.response';

class SignIn extends AbstractRoute {
    verify = false;
    acc: AccModel;

    async middleware(req: any, res: any, next: Function): Promise<void> {
        try {
            await AccModel.validate(req.body, AccShemas.SIGN_IN);

            const result = await accCtrl.get({
                email: req.body.email
            });
            
            if (result.succsess) {
                this.acc = (result as ResponseData).data;
                next();
            } else {
                next({ key: 'auth_not_found' });
            }
        } catch (err) {
            next({ key: 'auth_conflict_data', err });
        }
    }

    end(req: any, res: any): void {
        res.send({ 
            ...(this.acc as any).dataValues,
            token: jwt.sign(
                { id: this.acc.id },
                process.env.APP_TOKEN_SALT,
                { expiresIn: process.env.APP_TOKEN_ACCESS_EXPIRES_IN }
            ),
        });
    }
}

export default new SignIn('sign-in', 'POST');