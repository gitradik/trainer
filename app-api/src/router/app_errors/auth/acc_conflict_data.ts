import ApplicationError from '../application_error';

class AccConflictData extends ApplicationError {
    constructor(message) {
        super(message || 'CONFLICT OF ACCOUNT DATA', 409, 'AccConflictData');
    }
}

export default AccConflictData;