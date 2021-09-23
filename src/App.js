import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="App">
          <Route path="/" exact component={Home} />
        </div>
      </ToastProvider>
    </Router>
    
  );
}

export default App;
