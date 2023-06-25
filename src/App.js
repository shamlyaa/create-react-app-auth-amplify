import React, { Component } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
function MyPortal() {
return (

<>
  <button>
<h1>
<a href="https://virtualclinic.mobi/telecareus/frontend/site/login"> Patient </a>
  </h1>
  </button>
  </>
  
);
  
}
function MyDoctor() {
return (

<>
<h1>
<a href="https://virtualclinic.mobi/telecareus/frontend/site/login"> Provider </a>
  </h1>
  </>
  
);
  
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
      <MyPortal />
      <MyDoctor />
        <header className="App-header">
        
          <p>
            Welcome to ValuCare Virtual Clinic (TVC)
      
          </p>
          <a
            className="App-link"
            href="https://virtualclinic.mobi/telecarev.php"
            target="_blank"
            rel="noopener noreferrer"
          >
              
            VIDEO CONSULT 
          </a>
             
        </header>
      </div>

     
    );
  }
}

export default withAuthenticator(App);
