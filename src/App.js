import React from "react"
import './App.css'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Index from './components/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" exact component={Index}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
