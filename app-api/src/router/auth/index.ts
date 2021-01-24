import {AbstractRoute} from '../abstract_route';
import SignIn from './sign_in';
import SignUp from './sign_up';

const routes: AbstractRoute[] = [
    SignIn,
    SignUp,
];

export default routes;