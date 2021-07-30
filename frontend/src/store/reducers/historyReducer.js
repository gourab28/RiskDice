import {BET_HISTORY, HISTORY_ERROR} from '../types'

const initialState = {
    history:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case BET_HISTORY:
        return {
            ...state,
            list:action.payload,
            loading:false

        }
        case HISTORY_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}