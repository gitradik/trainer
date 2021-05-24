import ApplicationError from '../application_error';

class AccConflictData extends ApplicationError {
    constructor(err) {
        super('Conflict of account data', 409, 'AccConflictData', err);
    }
}

export default AccConflictData;