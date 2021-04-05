class ApplicationError extends Error {
    status: number;
    subMessage?: string;
    errors?: any[];

    constructor(message: string, status: number, name: string, subErr?) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = name || this.constructor.name;
        this.message = message || 'Something went wrong. Please try again.';
        this.status = status || 500;

        if (subErr) {
            this.subMessage = subErr.message;
            this.errors = subErr.errors;
        }
    }
}

export default ApplicationError;