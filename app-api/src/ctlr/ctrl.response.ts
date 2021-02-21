
// import { ValidationError, ValidationErrorItem } from 'sequelize';
import CtrlError from './ctrl.error';

class BaseResponse {
    succsess: boolean;
    constructor(_succsess: boolean) {
        this.succsess = _succsess;
    }
}
export class ResponseData extends BaseResponse {
    data: any;
    constructor(_succsess: boolean, data: any) {
        super(_succsess);
        this.data = data;
    }
}
export class ResponseError extends BaseResponse {
    err: CtrlError;
    constructor(_succsess: boolean, err: CtrlError) {
        super(_succsess);
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