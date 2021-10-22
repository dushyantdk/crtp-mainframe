import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Home from './Home/Home';
import AppView from './AppView/AppView';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/app" exact component={AppView} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contactus" exact component={ContactUs} />
        </div>
      </ToastProvider>
    </Router>
    
  );
}

export default App;
