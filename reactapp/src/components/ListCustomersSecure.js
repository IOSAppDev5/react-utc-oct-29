import React, {PureComponent} from 'react';
import {Customer} from '../model/Customer';
import './ListCustomers.css';
import CustomerForm from './CustomerForm';
import axios from 'axios';
import {connect} from 'react-redux';

class ListCustomersSecure extends PureComponent{

    state = {
        data : [],
        addMode: false,
        selectedCustomer: null
    }

    constructor(props){

        super(props);
        console.log("[ListCustomers constructor]")

        //console.log("REACT_APP_CUSTOMERS_API_URL: " + process.env.REACT_APP_CUSTOMERS_API_URL);
        this.customersURL = process.env.REACT_APP_CUSTOMERS_SECURE_API_URL;

        //Initialize the data(customers)
        // this.state.data.push(new Customer(1, "Google", "Hyderabad"));
        // this.state.data.push(new Customer(2, "Facebook", "Bengaluru"));
        // this.state.data.push(new Customer(3, "Apple", "Hyderabad"));
        // this.state.data.push(new Customer(4, "Reliance", "Mumbai"));

        this.initData = [...this.state.data];
    }
    componentWillMount(){
        console.log("[ListCustomers componentWillMount]");
    }
    componentDidMount(){
        console.log("[ListCustomers componentDidMount]");

        axios
            .get(this.customersURL, {headers: {"x-access-token": this.props.token}})
            .then((resp) => {
                console.log("Success");
                console.log(resp);
                this.setState({
                    data: resp.data
                })

            }, (resp) => {
                console.log("Failed");
                console.log(resp);
            });
    }

    componentWillReceiveProps(){
        console.log("[ListCustomers componentWillReceiveProps]");
    }
    // shouldComponentUpdate(){
    //     console.log("[ListCustomers shouldComponentUpdate]");
    //     return true;
    // }
    componentWillUpdate(){
        console.log("[ListCustomers componentWillUpdate]");
    }
    componentDidUpdate(){
        console.log("[ListCustomers componentDidUpdate]");
    }


    add = (customer) => {

        axios
            .post(this.customersURL, customer)
            .then(() => {
                const updatedData = [...this.state.data];
                updatedData.push(customer);
                //updatedData.push(new Customer(parseInt(customer.id), customer.name, customer.location));

                this.setState({
                    data: updatedData
                })
                alert("Saved");
            }, () => {
                alert("Failed");
            });
    }
    update = (customer) => {

        axios
            .put(this.customersURL, customer)
            .then(() => {
                const updatedData = [...this.state.data];
                const index = updatedData.findIndex(cust => cust.id === customer.id);
                updatedData[index] = customer;
        
                this.setState({
                    data: updatedData,
                    selectedCustomer: null
                });
                alert("Updated");
            }, () => {
                alert("Failed");
            });
    }
    cancelEdit = () => {

        this.setState({
            selectedCustomer: null
        });
    }

    delete = (index) => {


        axios
            .delete(this.customersURL + "/" + this.state.data[index].id)
            .then(() => {

                const updatedData = [...this.state.data];
                updatedData.splice(index, 1);
        
                this.setState({
                    data: updatedData
                });
                alert("Deleted");

            }, () => {
                alert("Failed");
            })

       
    }

    addNew = () => {

        this.setState({
            addMode: true
        });
    }

    cancelAddNew = () => {
        this.setState({
            addMode: false
        });
    }

    edit = (index) => {

        this.setState({
            selectedCustomer: this.state.data[index]
        })
    }

    

    render(){

        console.log("[ListCustomers render]");
        var output = this.state.data.map( (cust, index) => {
            return (
                <div key={index} className="customer">
                    <p>Id: {cust.id}</p>
                    <p>Name: {cust.name}</p>
                    <p>Location: {cust.location}</p>
                    <div>
                        {/* <button onClick={() => {this.delete(index)}}>Delete</button> */}
                        <button onClick={this.delete.bind(this, index)}>Delete</button>
                        <button onClick={() => {this.edit(index)}}>Edit</button>
                    </div>
                </div>
            );
        })
        return (
            <div>
                <h3>Customers</h3>
               
                <div style={{backgroundColor: ' rgb(54, 51, 51)',  display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    {output}
                </div>
                <div>
                    <button onClick={this.addNew}>Add New</button>
                </div>
                {this.state.addMode ? <CustomerForm onSave={this.add} 
                                                onCancel={this.cancelAddNew}/> : null}
                
                {this.state.selectedCustomer? <CustomerForm key={this.state.selectedCustomer.id} 
                                                    customer={this.state.selectedCustomer} 
                                                    onSave={this.update} onCancel={this.cancelEdit}/> : null}
            </div>
        );
    }

}

const mapPropsToState = (state)=> {
    return{
        isAuth: state.isAuth,
        token: state.token
    }
}

export default connect(mapPropsToState)(ListCustomersSecure);
