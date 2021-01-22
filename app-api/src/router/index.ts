import * as express from 'express';
import { RouterModule } from './router_module';
import AuthRoutes from './auth';

const router = express.Router({
    caseSensitive: true,
});

new RouterModule('auth', router, AuthRoutes);

export default router;
