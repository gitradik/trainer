import { IErrors, IErrorListItem } from '../utils/errors';

export class SqlzError extends Error implements IErrors {
    message: string;
    errors: IErrorListItem[];

    constructor(err) {
        super();
        Error.captureStackTrace(this, this.constructor);

        this.message = err.message;

        if (Array.isArray(err.errors)) {
            this.errors = err.errors.map(message => ({ path: err.path, message }));
        } else {
            this.errors = [];
        }
    }
}

export async function modelValidate(payload, shema): Promise<SqlzError> {
    try {
        await shema.validate(payload);
        return;
    } catch (err) {
        throw new SqlzError(err);
    }
}

