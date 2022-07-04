import { combineReducers } from 'redux';
import global from '../../app/modules/Dashboard/ducks/reducers';
const rootReducer = combineReducers({
  global,
});
export default rootReducer;
