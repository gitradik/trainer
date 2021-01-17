type meth = 'GET' | 'PUT' | 'DEL' | 'POST'; 

export interface Endpoint {
    uri: string;
    method: meth;
    middleware: Function;
    end: Function;
}

export abstract class AbstractRoute {
    abstract endpoints(): Endpoint[];
}