import { AbstractRoute, Endpoint } from '../abstract_route';
import { Acc } from '../../sqlz/models/acc';

class Login extends AbstractRoute {
    acc: Acc;

    async login(req, res, next): Promise<void> {
        this.acc = await Acc.findOne({ where: { id: 1 } });
        next();
    }

    loginEnd(req, res, next): void {
        res.send(this.acc);
    }

    getEndpoint(): Endpoint {
        return {
            uri: 'login',
            method: 'POST',
            middleware: this.login,
            end: this.loginEnd
        }
    }
}

export default new Login();