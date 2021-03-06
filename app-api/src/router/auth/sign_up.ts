import jwt from 'jsonwebtoken';
import { AbstractRoute } from '../abstract_route';
import { AccModel, AccShemas } from '../../sqlz/models/acc';
import accCtrl from '../../ctlr/auth.ctrl';
import { ResponseData, ResponseError } from '../../ctlr/ctrl.response';

class SignUp extends AbstractRoute {
    verify = true;
    acc: AccModel;

    async middleware(req: any, res: any, next: Function): Promise<void> {
        try {
            await AccModel.validate(req.body, AccShemas.SIGN_UP);

            const result = await accCtrl.create(req.body);
            
            if (result.succsess) {
                this.acc = (result as ResponseData).data;
                next();
            } else {
                next({
                    key: 'auth_conflict_data',
                    err: (result as ResponseError).err,
                });
            }
        } catch (err) {
            next({ key: 'auth_conflict_data', err });
        }
    }

    async end(req: any, res: any, next: Function): Promise<void> {
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

export default new SignUp('sign-up', 'POST');