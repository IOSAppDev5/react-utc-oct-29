import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {inc_ctr, decr_ctr, add_to_ctr} from '../redux/actionCreators';
import * as actionCreators from '../redux/actionCreators';

class ReduxDemo extends Component{

    componentDidMount(){
        this.props.fetch();
    }

    increment =() => {
        this.props.inc();
    }
    add = () => {

        this.props.addToCtr(parseInt(this.inp.value));
    }
    render(){

        return (
            <div>
                <h3>Redux Demo</h3>

                <p>Counter from Redux Store: {this.props.ctr}</p>
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={() => {this.props.decr()}}>Decrement</button>
                </div>
                <div>
                    <input type="number" ref={(inp)=> {this.inp = inp}}/>
                    <button onClick={this.add}>Add To Counter</button>
                </div>
                <div>
                    {this.props.customers.map((cust, index)=> {
                        return(
                            <div key={index}>
                                <p>{cust.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
const mapPropsToState = (state) => {

    //ctr-> props
    // mapped to state.counter
    return {
        ctr: state.counter,
        customers: state.customers
    }
}
const mapPropsToDispatch = (dispatch) => {

    // inc -> function on props
    // return {
    //     inc: () => {dispatch({type: "INC_CTR"})},
    //     decr: () => {dispatch({type: "DECR_CTR"})},
    //     addToCtr: (value) => {dispatch({type: "ADD_TO_CTR", payload: value})}
    // }

    return {
        inc: () => {dispatch(actionCreators.inc_ctr())},
        decr: () => {dispatch(actionCreators.decr_ctr())},
        addToCtr: (value) => {dispatch(actionCreators.add_to_ctr(value))},
        fetch : () => {dispatch(actionCreators.fetch_customers())}
    }
}

export default connect(mapPropsToState, mapPropsToDispatch)(ReduxDemo);