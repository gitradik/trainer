
import authErrors from './auth/err';

const errMap = new Map(
    [
        ...authErrors
    ]
);

export function handler(errKey, req, res, next): void {
    const error = errMap.get(errKey);
    res.status(error.status).send(error);
}