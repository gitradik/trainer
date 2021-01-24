import ApplicationError from '../application_error';
import CtrlError from '../../../ctlr/ctrl.error';

class AccConflictData extends ApplicationError {
    constructor(err: CtrlError) {
        super('Conflict of account data', 409, 'AccConflictData', err);
    }
}

export default AccConflictData;