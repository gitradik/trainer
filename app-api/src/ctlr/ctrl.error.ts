import { ValidationErrorItem } from 'sequelize';

class CtrlError {
    msg: string;
    errors: { message: string, path: string }[];

    constructor(_msg?: string, errors?: any[]) {
        this.msg = _msg;
        
        if (Array.isArray(errors)) {
            this.errors = this.parse(errors);
        }
    }

    private parse(errors: any[]): { message: string, path: string }[] {
        return errors.map(function(err: ValidationErrorItem) {
            return {
                message: err.message,
                path: err.path
            };
        })
    }
}

export default CtrlError;