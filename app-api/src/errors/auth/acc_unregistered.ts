import ApplicationError from '../application_error';

class AccUnregistered extends ApplicationError {
    constructor() {
        super('User not logged in', 401, 'Unregistered');
    }
}

export default AccUnregistered;