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
  <button>
<h1>
<a href="https://virtualclinic.mobi/telecareus/frontend/site/login"> Doctor </a>
  </h1>
  </button>
  </>
  
);
  
}

function MyRpm() {
return (

<>
  <button>
<h1>
<a href="https://portal.remotecarepartners.com/#"> RPM/CCM </a>
  </h1>
  </button>
  </>

);
  
}
function MyMobile() {
return (

<>
  <button>
<h1>
<a href="https://telecare.scriptrapps.io/mobileapp.html"> Download Mobile App</a>
  </h1>
  </button>
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
      <MyRpm />
      <MyMobile />
        <header className="App-header">
        
          <p>
             TELECARE VIRTUAL CLINIC (TVC)
      
          </p>
    
      <h1>
      <a
            className="App-link"
            href="https://virtualclinic.mobi/telecarev.php"
            target="_blank"
            rel="noopener noreferrer"
          >
              
            VIDEO CONSULT 
          </a>
              </h1>  
              
        </header>
      </div>

     
    );
  }
}

export default withAuthenticator(App);
