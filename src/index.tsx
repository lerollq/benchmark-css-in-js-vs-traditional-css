import React from 'react';
import ReactDOM from 'react-dom';
import AppCssInJS from './App_CSS_IN_JS';
import AppTraditionalCss from "./App_TRADITIONAL_CSS"
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>Benchmark</h1>
    <hr/>
    <Router>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Link to="/css-in-js">CSS IN JS</Link>
        &nbsp;&nbsp;
        <Link to="/traditional-css">Traditional CSS</Link>
      </div>
      <hr/>
      <Switch>
        <Route  exact path="/css-in-js" component={() => <AppCssInJS/>}/>
        <Route exact path="/traditional-css" component={()=><AppTraditionalCss/>}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
