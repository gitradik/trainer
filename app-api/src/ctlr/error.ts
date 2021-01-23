class CtrlError extends Error {
    constructor(msg: string) {
        super(msg);
    }
}

export default CtrlError;