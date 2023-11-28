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
<a href="https://virtualclinic.mobi/telecareus/frontend/site/login"> Telecare Portal</a>
  </h1>
  </button>
  </>
  
);


  
}


function MyEMR() {
return (

<>
  <button>
<h1>
<a href="https://static.practicefusion.com/apps/ehr/index.html#/login">Practice Fusion </a>
  </h1>
  </button>
  </>
  
);


  
}






function MyDevices() {
return (

<>
  <button>
<h1>
<a href="https://portal.smartmeterrpm.com/login">Order Devices </a>
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
<a href="https://telecare.scriptrapps.io/mobileapp.html">Mobile App</a>
  </h1>
  </button>
  </>

);
  
}

function MyMed() {
return (

<>
  <button>
<h1>
<a href="https://telecare.carenehr.com/public/signin">Caren</a>
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
      
      <MyMed />
      <MyEMR />
       
       <MyMobile />
      <MyDevices />
        <header className="App-header">
        
          <p>
    
             VIRTUAL CONSULTATION -->
      <button>
      <h2>
  <a href="https://telecare.scriptrapps.io/acuityb.html">Book Now</a>
      </h2>
      </button>
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
