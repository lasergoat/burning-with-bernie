
import { actions } from 'react-redux-form';

export function setAuth(auth) {
  
  return actions.change('auth', auth)
}
