import { AbstractRoute, Endpoint } from '../abstract_route';

class Auth extends AbstractRoute {
    login(req, res, next): void {
        next('not_found');
    }

    loginEnd(req, res, next): void {
        res.send('success');
    }

    endpoints(): Endpoint[] {
        return [
            {
                uri: 'login',
                method: 'POST',
                middleware: this.login,
                end: this.loginEnd
            }
        ];
    }
}

export default new Auth();