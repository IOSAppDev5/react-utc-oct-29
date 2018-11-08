import React, {Component} from 'react';
import simpleHOC from './SimpleHOC';

class Counter extends Component{

    //ES 7
    state = {
        count: 0
    }

    constructor(props){
        super(props);

        console.log("Counter constructor");
        this.decr = this.decr.bind(this);

        //ES6
        // this.state = {
        //     count: 0
        // }        
    }
    //Arrow Function(ES7)
    inc = (event)=> {
        //console.log(event);
        //this.state.count++;
        const updatedCount = this.state.count + 1;
        this.setState({
            count: updatedCount
        });
    }
    decr(){

        const updatedCount = this.state.count - 1;
        this.setState({
            count: updatedCount
        });

    }
    change = (evt) => {

        this.setState({
            count: parseInt(evt.target.value)
        });
    }
    update = () => {

        this.setState({
            count: parseInt(this.inpRef.value)
        })

    }

    render(){
        return (
            <div>
                <p>Counter</p>
                <p>
                    <strong>{this.props.text}: {this.state.count}</strong>
                </p>
                <div>
                    {/* <button onclick="inc();">Inc</button> */}
                    <button onClick={this.inc}>Inc</button>
                    <button onClick={this.decr}>Decr</button>
                </div>
                <div>
                    {/* Controlled Input(2-way binding) */}
                    Count: <input type="number" 
                            value={this.state.count} onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled Input */}
                    Set: <input type="number" ref={(inpRef) => {this.inpRef = inpRef}}/>
                    <button onClick={this.update}>Update</button>
                </div>
            </div>
        );
    }
}

//export default simpleHOC(Counter);

export default Counter;