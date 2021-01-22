import ApplicationError from '../application_error';

class AccountNotFound extends ApplicationError {
    constructor(message: string) {
        super(message || 'ACCOUNT NOT FOUND', 404, 'AccountNotFound');
    }
}

export default AccountNotFound;