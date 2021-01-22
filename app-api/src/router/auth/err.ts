import errors from '../app_errors';
import ApplicationError from '../app_errors/application_error'

const m = new Map<string, ApplicationError>();
m.set('auth_not_found', new errors.AccountNotFound(''));

export default m;