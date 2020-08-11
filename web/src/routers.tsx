import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './Pages/Landing'

function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
        </BrowserRouter>
    );
}

export default Router;