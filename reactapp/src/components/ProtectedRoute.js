import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

class ProtectedRoute extends Component{

    render(){

        const WrappedComponent = this.props.component;
        return (
            
            <Route path={this.props.path} render={() => {

                return (this.props.isAuth ? <WrappedComponent/> : <Redirect to="/login"/>)

            }} />
        )
    }
}

const mapPropsToState = (state)=> {
    return{
        isAuth: state.isAuth
    }
}

export default withRouter(connect(mapPropsToState)(ProtectedRoute));