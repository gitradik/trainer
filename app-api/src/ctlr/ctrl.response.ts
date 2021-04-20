
import { ValidationError, ValidationErrorItem } from 'sequelize';
import CtrlError from './ctrl.error';

class BaseResponse {
    succsess: boolean;
    constructor(succsess: boolean) {
        this.succsess = succsess;
    }
}
export class ResponseData extends BaseResponse {
    data: any;
    constructor(succsess: boolean, data: any) {
        super(succsess);
        this.data = data;
    }
}
export class ResponseError extends BaseResponse {
    err: CtrlError;
    constructor(succsess: boolean, err: CtrlError) {
        super(succsess);
        this.err = err;
    }
}

export class CtrlResponse {
    static responseData(data: any): ResponseData {
        if (!data) {
            throw new CtrlError();
        }
        return new ResponseData(true, data);
    }
    static responseError(err: any): ResponseError {
        const ctrlErr = new CtrlError(err.message, err.errors);
        return new ResponseError(false, ctrlErr);
    }
} 