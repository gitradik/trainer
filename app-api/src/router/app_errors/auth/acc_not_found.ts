import ApplicationError from '../application_error';

class AccNotFound extends ApplicationError {
    constructor(message: string) {
        super(message || 'ACCOUNT NOT FOUND', 404, 'AccNotFound');
    }
}

export default AccNotFound;