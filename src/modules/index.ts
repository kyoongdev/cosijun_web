import { combineReducers } from 'redux';
import checks from './check/reducer';
import { Check } from './check/types';

export type RootState = {
  checks: Check;
};

const rootReducer = combineReducers({
  checks,
});

export default rootReducer;
