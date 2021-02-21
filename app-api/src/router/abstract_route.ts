type meth = 'GET' | 'PUT' | 'DEL' | 'POST'; 

export abstract class AbstractRoute {
    uri: string;
    meth: meth;

    constructor(_uri: string, _meth: meth) {
        this.uri = _uri;
        this.meth = _meth;
    }

    abstract middleware(req: any, res: any, next: Function): Promise<void> | void;
    abstract end(req: any, res: any, next: Function): Promise<void> | void;
}