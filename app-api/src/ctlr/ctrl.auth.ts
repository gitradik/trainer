import { Acc } from '../sqlz/models/acc';
import { Ctrl } from './ctlr.interface';

class AccCtrl implements Ctrl {
    async getAcc(id: number): Promise<Acc> {
        return await Acc.findOne({ where: { id } });
    }
}

export default new AccCtrl();