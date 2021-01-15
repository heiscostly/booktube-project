import React from "react"
import './App.css'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup'
import Index from './components/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" exact component={Index}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
