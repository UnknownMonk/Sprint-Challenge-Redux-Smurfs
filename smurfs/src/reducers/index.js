/*
  Be sure to import in all of the action types from `../actions`
*/
import { GETSUCCESS, ADDSUCCESS, DELSUCCESS } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case GETSUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADDSUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case DELSUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
