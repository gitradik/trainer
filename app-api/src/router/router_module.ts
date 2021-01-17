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
    private router: Router;
    private module: AbstractRoute;

    constructor(_name: string, _router: Router, _module: AbstractRoute) {
        this.name = _name;
        this.router = _router;
        this.module = _module;

        this.init();
    }

    private init(): void {
        this.module.endpoints().forEach(e => {
            const meth = Methods[e.method];
            if (meth) {
                this.router[meth](
                    `${API_PREFIX}/${this.name}/${e.uri}`, 
                    e.middleware.bind(this.module),
                    e.end.bind(this.module)
                );
            }
        });
    }
}