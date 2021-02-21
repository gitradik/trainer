import errors from '../../errors';

const m = new Map<string, any>();
m.set('auth_not_found', errors.AccNotFound);
m.set('auth_conflict_data', errors.AccConflictData);

export default m;