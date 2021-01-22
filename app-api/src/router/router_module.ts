import { Router } from "express-serve-static-core";
import { AbstractRoute } from "./abstract_route";

enum Methods {
    'GET' = 'get',
    'PUT' = 'put',
    'POST' = 'post',
    'DEL' = 'delete'
}

const API_PREFIX = '/api';

export class RouterModule  {
    private name: string;

    constructor(_name: string, router: Router, routes: AbstractRoute[]) {
        this.name = _name;

        if (_name) {
            this.init(router, routes);
        }
    }

    private init(router: Router, routes: AbstractRoute[]): void {
        for (let i = 0; i < routes.length; i++) {
            const r = routes[i];
            const e = r.getEndpoint();
            const meth = Methods[e.method];
            
            if (meth) {
                router[meth](
                    `${API_PREFIX}/${this.name}/${e.uri}`, 
                    e.middleware.bind(r),
                    e.end.bind(r)
                );
            }
        }
    }
}