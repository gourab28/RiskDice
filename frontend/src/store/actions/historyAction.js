import {BET_HISTORY, HISTORY_ERROR} from '../types'
import axios from 'axios'
export const getHistory = () => async dispatch => {
    let GET_REMEMBER = localStorage.getItem("user");
   let REMEMBER_DATA = JSON.parse(GET_REMEMBER);
  
    try{
      const userd = await { "userID": REMEMBER_DATA.userID, "password": REMEMBER_DATA.password };
        const res = await axios.post(`http://localhost:5000/api/balance`, userd)
        dispatch( {
            type: BET_HISTORY,
            payload: res.data.betHistory
        })
    }
    
    catch(e){
        dispatch( {
            type: HISTORY_ERROR,
            payload: console.log(e),
        })
    }

}