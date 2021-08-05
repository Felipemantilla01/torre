import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';

const userLogin = createAction('USER_LOGIN');
const userLogout = createAction('USER_LOGOUT');
const userSetInfo = createAction('USER_SET_INFO', props<User>());

    
export default  {
    userLogin,
    userLogout,
    userSetInfo
}
