import * as express from 'express';
import { RouterModule } from './router_module';
import { AbstractRoute } from './abstract_route';
import AutRoute from './auth';

const router = express.Router({
    caseSensitive: true,
});

new RouterModule('auth', router, AutRoute as AbstractRoute);

export default router;
