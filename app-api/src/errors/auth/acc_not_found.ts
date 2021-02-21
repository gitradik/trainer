import ApplicationError from '../application_error';

class AccNotFound extends ApplicationError {
    constructor() {
        super('Account not found', 404, 'AccNotFound');
    }
}

export default AccNotFound;