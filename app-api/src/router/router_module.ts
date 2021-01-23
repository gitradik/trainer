import { Router } from "express-serve-static-core";
import { AbstractRoute } from "./abstract_route";

enum Methods {
    'GET' = 'get',
    'PUT' = 'put',
    'POST' = 'post',
    'DEL' = 'delete'
}

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
            const meth = Methods[r.meth];
            
            if (meth) {
                router[meth](
                    `${process.env.APP_API_PREFIX}/${this.name}/${r.uri}`, 
                    r.middleware.bind(r),
                    r.happy.bind(r)
                );
            }
        }
    }
}