import { Acc, AccModel } from '../sqlz/models/acc';
import { Ctrl } from './ctlr.interface';
import { CtrlResponse, ResponseData, ResponseError } from './ctrl.response';

class AccCtrl implements Ctrl {
    get({ email }: Partial<AccModel>): Promise<ResponseData | ResponseError> {
        return Acc.findOne({ where: { email } })
            .then(CtrlResponse.responseData)
            .catch(CtrlResponse.responseError);
    }

    update(acc: AccModel): Promise<ResponseData | ResponseError> {
        return Acc.update(acc, { where: { id: acc.id } })
            .then(CtrlResponse.responseData)
            .catch(CtrlResponse.responseError);
    }

    create(acc: AccModel): Promise<ResponseData | ResponseError> {
        return Acc.create(acc)
            .then(CtrlResponse.responseData)
            .catch(CtrlResponse.responseError);
    }
}

export default new AccCtrl();