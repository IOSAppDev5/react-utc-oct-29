import axios from 'axios';

export const inc_ctr = () => {
    return {
        type: "INC_CTR"
    }
}
export const decr_ctr = () => {
    return {
        type: "DECR_CTR"
    }
}
export const add_to_ctr = (value) => {
    return {
        type: "ADD_TO_CTR",
        payload: value
    }
}
export const fetch_customers = ()=> {

    return (dispatch) => {
        axios
            .get(process.env.REACT_APP_CUSTOMERS_API_URL)
            .then((resp) => {
                dispatch( {
                    type: "FETCH_CUSTOMERS",
                    payload: resp.data
                })
            })
    }
}