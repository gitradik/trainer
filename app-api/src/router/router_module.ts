import { Router } from 'express-serve-static-core';
import { AbstractRoute } from './abstract_route';
import jwt from 'jsonwebtoken';

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
        this.init(router, routes);
    }

    private init(router: Router, routes: AbstractRoute[]): void {
        for (let i = 0; i < routes.length; i++) {
            const r = routes[i];
            const meth = Methods[r.meth];
            
            if (meth) {
                const sv = router[meth](
                    `${process.env.APP_API_PREFIX}/${this.name}/${r.uri}`,
                    this.verifyToken(r.verify),
                    r.middleware.bind(r),
                    r.end.bind(r)
                );
            }
        }
    }

    private verifyToken(verify: boolean) {    
        return async function(req, res, next): Promise<void> {
            const errKey = 'auth_unregistered';

            if (req.headers.authorization && verify) {
                try {
                    const result = await jwt.verify(req.headers.authorization, process.env.APP_TOKEN_SALT);
                    (req as any).id = result.id;
        
                    next();
                } catch (err) {
                    next({ key: errKey });
                }
            } else if (!verify) {
                next();
            } else {
                next({ key: errKey });
            }
        }
    }
}