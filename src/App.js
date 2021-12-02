import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Home from './Home/Home';
import AppView from './AppView/AppView';
import AboutUs from './AboutUs/AboutUs';
import Security from './Security/Security';
import Securitytwo from './Security/Securitytwo';
import ContactUs from './ContactUs/ContactUs';
import Careers from './Careers/Careers';
import Applicationdetails from './Careers/Applicationdetails';
import Privacy from './Privacy/Privacy';
import Terms from './Privacy/Terms';
function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/app" exact component={AppView} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/security" exact component={Security} />
          <Route path="/securitytwo" exact component={Securitytwo} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/career" exact component={Careers} />
          <Route path="/Applicationdetails" exact component={Applicationdetails} />
          <Route path="/Privacy" exact component={Privacy} />
          <Route path="/Terms" exact component={Terms} />
        </div>
      </ToastProvider>
    </Router>
    
  );
}

export default App;
