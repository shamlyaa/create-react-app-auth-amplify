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
<a href="https://virtualclinic.mobi/telecareus/frontend/site/login">Patient </a>
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
<a href="https://static.practicefusion.com/apps/ehr/index.html#/login"> EMR </a>
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

function MyRpm() {
return (

<>
  <button>
<h1>
<a href="https://app.kareo.com/login-ui/#/partners/tebra">Billing </a>
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
<a href="https://telecare.carenehr.com/public/signin"> Med Alerts</a>
  </h1>
  </button>
  </>
  
);


  
}

function MyQrcode() {
return (

<>
  <button>
<h1>
<a href="https://telecare.scriptrapps.io/rpmvideo.html">RPM Info</a>
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
      <MyRpm />
      <MyMed />
      <MyEMR />
       <MyDoctor />
      <MyQrcode />
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
