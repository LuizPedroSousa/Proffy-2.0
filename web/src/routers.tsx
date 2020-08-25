import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './Pages/Landing'
import TeacherList from './Pages/TeacherList/index';
import Login from './Pages/Login/index';
import Register from './Pages/Register/index';

function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    );
}

export default Router;