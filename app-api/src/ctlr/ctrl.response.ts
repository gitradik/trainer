import CtrlError from './error';

class CtrlResponse {
    static responseData(data: any): any {
        return data;
    }
    static responseError(err: any): CtrlError {
        console.log('responseError', err);
        return new CtrlError(err.message || 'error');
    }
}

export default CtrlResponse; 