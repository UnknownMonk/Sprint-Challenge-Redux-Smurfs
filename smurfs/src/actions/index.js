import axios from 'axios';
export const GETLOADING = 'GETLOADING';
export const GETSUCCESS = 'GETSUCCESS';
export const GETFAILURE = 'GETFAILURE';
export const ADDLOADING = 'ADDLOADING';
export const ADDSUCCESS = 'ADDSUCCESS';
export const ADDFAILURE = 'ADDFAILURE';
export const DELLOADING = 'DELLOADING';
export const DELSUCCESS = 'DELSUCCESS';
export const DELFAILURE = 'DELFAILURE';
export const PUTLOADING = 'PUTLOADING';
export const PUTSUCCESS = 'PUTSUCCESS';
export const PUTFAILURE = 'PUTFAILURE';

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

export const addSmurfs = smurf => {
  return dispatch => {
    dispatch({ type: ADDLOADING });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)

      .then(res => {
        console.log(res);

        dispatch({
          type: ADDSUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: ADDFAILURE, payload: 'No Smurf for you' });
      });
  };
};

export const delSmurf = id => {
  return dispatch => {
    dispatch({ type: DELLOADING });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)

      .then(res => {
        console.log(res);

        dispatch({
          type: DELSUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: DELFAILURE, payload: 'No Smurf for you' });
      });
  };
};

export const updateSmurfs = (id, newSmurf) => {
  return dispatch => {
    dispatch({ type: PUTLOADING });
    axios
      .put(`http://localhost:3333/smurfs/${id}`, newSmurf)

      .then(res => {
        console.log(res);

        dispatch({
          type: PUTSUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: PUTFAILURE, payload: 'No Smurf for you' });
      });
  };
};
