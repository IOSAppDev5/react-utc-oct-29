import React, {PureComponent} from 'react';
import axios from 'axios';
import _ from 'lodash';
import simpleHOC from './SimpleHOC';

class WikiSearh extends PureComponent{

    state = {
        results: []
    }
    constructor(props){
        super(props);

        this.callWikiAPI = _.debounce(this.callWikiAPI, 500);
    }
    search=(evt)=> {

        var searchText = evt.target.value;
        //var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchText;
        
        this.callWikiAPI(searchText);

    }
    callWikiAPI = (searchText) => {
        var url = "https://en.wikipedia.org/w/api.php";
        var params = {
            action: "opensearch",
            format: "json",
            origin: "*",
            search: searchText
        }
        axios
            .get(url, {params: params})
            .then((resp) => {
                console.log(resp);
                this.setState({
                    results: resp.data[1]
                })
            })
    }

    render(){
        return (
            <div>
                <h3>Wiki Search</h3>
                <input type="search" onChange={this.search}/>
                {this.state.results.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default simpleHOC(WikiSearh);