import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './Pages/Landing'
import TeacherList from './Pages/TeacherList/index';

function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
        </BrowserRouter>
    );
}

export default Router;