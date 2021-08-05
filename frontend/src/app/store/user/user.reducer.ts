import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';
import actions from './user.actions';

export const initialState: User = {
  fullname: '',
  email: '',
  phone: '',
  isLogged: false,
  picture: '',
};

const _userReducer: ActionReducer<User, Action> = createReducer(
  initialState,
  on(actions.userLogin, (state) => ({ ...state, isLogged: true })),
  on(actions.userLogout, (state) => ({ ...state, isLogged: false })),
  on(actions.userSetInfo, (state, action) => action)
);

export function userReducer(state: User | undefined, action: Action) {
  return _userReducer(state, action);
}
