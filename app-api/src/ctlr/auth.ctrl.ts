import { Acc, AccModel } from '../sqlz/models/acc';
import { Ctrl } from './ctlr.interface';
import CtrlResponse from './ctrl.response';

class AccCtrl implements Ctrl {
    get(id: number): Promise<Acc> {
        return Acc.findOne({ where: { id } })
            .then(CtrlResponse.responseData)
            .catch(CtrlResponse.responseError);
    }

    update(acc: AccModel): Promise<any> {
        return Acc.update(acc, { where: { id: acc.id } })
            .then(CtrlResponse.responseData)
            .catch(CtrlResponse.responseError);
    }

    create(acc: AccModel): Promise<any> {
        return Acc.create(acc)
            .then(CtrlResponse.responseData)
            .catch(CtrlResponse.responseError);
    }
}

export default new AccCtrl();