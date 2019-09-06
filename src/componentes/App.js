import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UsuarioBadge from './UsuarioBadge';
import UsuarioBadgeView from './UsuarioBadgeView';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UsuarioBadge} />
                <Route exact path="/view" component={UsuarioBadgeView} />
            </Switch>
        </BrowserRouter>
    )
}

export default App