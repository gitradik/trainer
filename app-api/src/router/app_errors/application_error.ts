import CtrlError from '../../ctlr/ctrl.error';

class ApplicationError extends Error {
    status: number;
    errors: { message: string, path: string }[];

    constructor(message: string, status: number, name: string, ctrlErr?: CtrlError) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = name || this.constructor.name;
        this.message = (ctrlErr && ctrlErr.msg) || message || 'Something went wrong. Please try again.';
        this.status = status || 500;

        if (ctrlErr) {
            this.errors = ctrlErr.errors;
        }
    }
}

export default ApplicationError;