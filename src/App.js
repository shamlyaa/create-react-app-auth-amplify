import React, { Component } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
         
          <p>
            Welcome to Telecareus 
          </p>
          <a
            className="App-link"
            href="https://virtualclinic.mobi/telecareus/frontend/site/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login to the Portal
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
