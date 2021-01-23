import errors from '../app_errors';
import ApplicationError from '../app_errors/application_error'

const m = new Map<string, ApplicationError>();
m.set('auth_not_found', new errors.AccNotFound(''));
m.set('auth_conflict_data', new errors.AccConflictData(''));

export default m;