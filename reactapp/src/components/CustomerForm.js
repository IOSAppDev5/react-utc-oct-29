import React, {Component} from 'react';
import { Customer } from '../model/Customer';

class CustomerForm extends Component{

    state = {
        customer: new Customer(0, "", "")
    }
    constructor(props){
        super(props);
        console.log("[CustomerForm constructor]");

        this.initState = {...this.state};

        if(this.props.customer){
            this.state.customer = this.props.customer;
        }
    }
    componentWillReceiveProps(nextProps){

        console.log("[CustomerForm componentWillReceiveProps]: ", nextProps);
        // if(nextProps.customer){
        //     this.setState({
        //         customer: nextProps.customer
        //     })
        // }
    }
    componentWillMount(){
        console.log("[CustomerForm componentWillMount]");
    }
    componentDidMount(){
        console.log("[CustomerForm componentDidMount]");
    }

    change = (evt) => {

        const value = evt.target.value;
        const propName = evt.target.name;

        const updatedCustomer = {...this.state.customer};
        if(propName === "id"){
            updatedCustomer[propName]= parseInt(value);    
        }
        else{
            updatedCustomer[propName]= value;
        }
        

        this.setState({
            customer: updatedCustomer
        });
        
    }
    save = () => {
        this.props.onSave(this.state.customer);
        this.setState(this.initState);
    }
    cancel = () => {

        this.props.onCancel();
    }

    render(){

        console.log("[CustomerForm render]");

        return (
            <div>
                <h4>Customer Form</h4>
                <fieldset>
                    <p>Customer ID:</p>
                    <div>
                        <input type="number" placeholder="ID" name="id" value={this.state.customer.id} onChange={this.change}/>
                    </div>
                    <p>Name:</p>
                    <div>
                        <input  placeholder="Name" name="name" value={this.state.customer.name} onChange={this.change}/>
                    </div>
                    <p>Location:</p>
                    <div>
                        <input  placeholder="Location" name="location" value={this.state.customer.location} onChange={this.change}/>
                    </div>
                    <div>
                        <button onClick={this.save}>Save</button>
                        <button onClick={this.cancel}>Cancel</button>
                    </div>
                </fieldset>
            </div>
        );
    }


}

export default CustomerForm;

