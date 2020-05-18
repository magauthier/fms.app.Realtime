import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import DeviceList from './components/device-list';
import DeviceLocation from './components/device-location';

import logo from './content/logo.png';

function App () {
    return (
       <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://astus.com/corpo" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="missingLogo" />
            </a>
            <Link to="/" className="navbar-brand">wizDevices</Link>
          </nav>
          <br />
          <Route path="/" exact component={DeviceList} />
          <Route path="/location/:id" component={DeviceLocation} />
          {/* <Route path="/create" component={DeviceCreate} /> */}
        </div>
     </Router>
    );
}

export default App;