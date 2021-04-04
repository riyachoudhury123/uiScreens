
import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import JobPage from './Pages/JobPage.js';
import Home8 from './Pages/Home8.js';
export const HomeRoute = "/";
export const coachProfileRoute = "/coachProfile/";
class Routing extends React.Component {
    render() {
        return (
            <div>
                <Route path={HomeRoute} exact component={Home8} />
                <Route path={coachProfileRoute} component={JobPage} />
            </div>
        );
    }
}
export default withRouter(Routing);