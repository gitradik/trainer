import { IErrors } from '../utils/errors';

class CtrlError implements IErrors {
    message: string;
    errors?: { message: string, path: string }[];

    constructor(_message?: string, errors?: any[]) {
        this.message = _message;
        
        if (Array.isArray(errors)) {
            this.errors = this.parse(errors);
        } else {
            this.errors = [];
        }
    }

    private parse(errors: any[]): { message: string, path: string }[] {
        return errors.map(function(err) {
            return {
                message: err.message,
                path: err.path
            };
        })
    }
}

export default CtrlError;