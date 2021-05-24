type meth = 'GET' | 'PUT' | 'DEL' | 'POST'; 

export abstract class AbstractRoute {
    uri: string;
    meth: meth;

    abstract verify: boolean;

    constructor(uri: string, meth: meth) {
        this.uri = uri;
        this.meth = meth;
    }

    abstract middleware(req: any, res: any, next: Function): Promise<void> | void;
    abstract end(req: any, res: any, next: Function): Promise<void> | void;
}