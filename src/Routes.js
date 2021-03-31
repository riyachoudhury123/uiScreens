import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import JobPage from './Pages/JobPage.js';
  import Home8 from './Pages/Home8.js';


 const ReactRouter = () => {
    return (
            <Fragment>
                <Switch>
                   <Route exact path="/" component={JobPage} />
                   <Route exact path="/home" component={Home8} />
                </Switch>
           </Fragment>
    
        )
    }
      export default ReactRouter; 