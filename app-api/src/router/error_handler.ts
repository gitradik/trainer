
import authErrors from './auth/err';

const errMap = new Map(
    [
        ...authErrors
    ]
);

export function handler({ key, err }, req, res, next): void {
    const AppErr = errMap.get(key);
    const appErr = new AppErr(err);
    res.status(appErr.status).send(appErr);
}