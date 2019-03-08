/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const GETLOADING = 'GETLOADING';
export const GETSUCCESS = 'GETSUCCESS';
export const GETFAILURE = 'GETFAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: GETLOADING });
    axios
      .get(`http://localhost:3333/smurfs`)

      .then(res => {
        console.log(res);

        dispatch({
          type: GETSUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: GETFAILURE, payload: 'No Smurf for you' });
      });
  };
};
