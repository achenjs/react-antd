import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../App';

import { RouteWithSubRoutes, routes } from '@/config/routes';

class RouteMap extends Component {
    render() {
        return (
            <HashRouter>
                <Route component={props => (
                    <App {...props}>
                        <Switch>
                             {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route} />
                            ))}
                        </Switch>
                    </App>
                )} />
            </HashRouter>
        );
    }
}

export default RouteMap;