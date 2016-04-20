
import { actions } from 'react-redux-form';

export function incrementTime(time) {
  
  return actions.change('time', time+1)
}
