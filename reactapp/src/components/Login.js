import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'reactstrap';

class Login extends Component{

    state = {
        shouldRedirect: false
    }

    login = () => {
        const username = this.userInp.value;
        const pwd = this.pwdInp.value;

        axios
            .post(process.env.REACT_APP_LOGIN_API_URL, 
                    null, {headers: {username: username, password: pwd}})
            .then((resp) => {

                
                this.props.setAuth(true);
                this.setState({
                            shouldRedirect: true
                        })
                this.props.setToken(resp.data.token)        
            }, () => {
                this.props.setAuth(false);
                this.setState({
                    shouldRedirect: false
                })
                this.props.setToken("")
            })

        // if(username === 'a' && pwd === 'a'){
        //     this.props.setAuth(true);
        //     this.setState({
        //         shouldRedirect: true
        //     })
        // }
        // else{
        //     this.props.setAuth(false);
        //     this.setState({
        //         shouldRedirect: false
        //     })
        // }
    }

    render(){

        if(this.state.shouldRedirect){
            return (
                <Redirect to="/" />
            )
        }

        return (
            <Fragment>
                <h3>Login</h3>
                <Alert color="info">
                    Please Login!!
                </Alert>
                <p>
                    UserName: <input ref={(inp) => {this.userInp = inp}}/>
                </p>
                <p>
                    Password: <input type="password" ref={(inp) => {this.pwdInp = inp}}/>
                </p>
                <button onClick={this.login}>Login</button>
            </Fragment>
           
        );
    }

}
const mapPropsToState = (state)=> {
    return{
        isAuth: state.isAuth,
        token: state.token
    }
}
const mapPropsToDispatch = (dispatch) => {
    return {
        setAuth : (value)=> {dispatch({type: "SET_AUTH", payload: value})},
        setToken: (value)=> {dispatch({type: "SET_TOKEN", payload: value})}
    }
}

export default connect(mapPropsToState, mapPropsToDispatch)(Login);