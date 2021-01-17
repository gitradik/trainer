import errors from '../app_errors';
import ApplicationError from '../app_errors/application_error'

type err = 'auth_not_found';

const m = new Map<err, ApplicationError>();
m.set('auth_not_found', new errors.AccountNotFound(''));

export default m;