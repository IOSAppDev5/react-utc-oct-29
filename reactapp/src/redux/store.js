import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//Init State
const initState = {
    counter: 0,
    customers: [],
    isAuth: false,
    token: ""
}

//Reducer
const reducer = (state=initState, action)=> {

    if(action.type === "SET_TOKEN"){
        return {
            ...state,
            token : action.payload
        }
    }
    if(action.type === "SET_AUTH"){
        return {
            ...state,
            isAuth : action.payload
        }
    }

    if(action.type === "INC_CTR"){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === "ADD_TO_CTR"){
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }
    if(action.type === "FETCH_CUSTOMERS"){
          return {
              ...state,
              customers: action.payload
          }  
    }
    return state;
}

//middleware

const logger = (store) => {

    return (next) => {
        
        return (action) => {

            console.log("[Logger]: ", store.getState());
            console.log("[Logger]: ", action);
            const result = next(action);
            console.log("[Logger after next]: ", store.getState());
            return result;
        }
    }
}

//Store
export const store = createStore(
                            reducer, 
                            applyMiddleware(logger, thunk));
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()                            