import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './Pages/Landing'
import TeacherList from './Pages/TeacherList/index';
import Login from './Pages/Login/index';
import Register from './Pages/Register/index';
import RestorePassword from './Pages/RestorePassword/index';

function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/restore password" component={RestorePassword} />

        </BrowserRouter>
    );
}

export default Router;