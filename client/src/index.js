import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context from './components/Context'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


ReactDOM.render(
  <Context> 
  <App />
  </Context>,
    document.getElementById('root')
  ); 
