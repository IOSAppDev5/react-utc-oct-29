var redux = require('redux');

//Initial State
var initState = {
    counter: 5,
    message: "Hello Redux"
}

//Reducer
const reducer = (state=initState, action) => {

    if(action.type === "INC_CTR"){
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    if(action.type === "ADD_TO_CTR"){
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }

    return state;
}
//Store
const store = redux.createStore(reducer);
console.log(store.getState());

//Subscriptions

store.subscribe(() => {
    console.log("In subscribe", store.getState());
})


//Dispatch Actions

store.dispatch({
    type: "INC_CTR"
});
store.dispatch({
    type: "ADD_TO_CTR",
    payload: 4
})
console.log(store.getState());
