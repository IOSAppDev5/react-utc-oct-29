import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from "./components/Counter";
import ListCustomers from "./components/ListCustomers";
import ListCustomersSecure from "./components/ListCustomersSecure";
import WikiSearch from './components/WikiSearch';
//import SimpleHOC from './components/SimpleHOC';
import ReduxDemo from './components/ReduxDemo';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h2>React Application</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <article>
                <BrowserRouter basename="/ReactApp/">
                    <section className="row">
                      <nav className="col-3">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/customers">Customers</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/wiki">Search</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/redux">Redux</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link"  to="/custsecure">Customer Secure</Link>
                          </li>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                        </ul>
                      </nav>
                      <article className="col-9">
                          {/* <Hello message=""/> */}
                          {/* <Route path="/" exact component={Hello}/> */}
                          <Route path="/" exact render={() => <Hello message="Routing"/>}/>
                          <Route path="/counter" component={Counter}/>
                          <ProtectedRoute path="/customers" component={ListCustomers}/>
                          <ProtectedRoute path="/custsecure" component={ListCustomersSecure}/>
                          <Route path="/wiki" component={WikiSearch}/>
                          <Route path="/redux" component={ReduxDemo}/>
                          <Route path="/login" component={Login}/>
                      </article>
                    </section>
                </BrowserRouter>
        </article>
      </div>
    );
  }
}

export default App;
