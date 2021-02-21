class ApplicationError extends Error {
    status: number;
    subMessage?: string;
    errors?: any[];

    constructor(message: string, status: number, name: string, err?) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = name || this.constructor.name;
        this.message = message || 'Something went wrong. Please try again.';
        this.status = status || 500;

        if (err) {
            this.subMessage = err.message;
            this.errors = err.errors;
        }
    }
}

export default ApplicationError;