import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../home/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
])

export default Router;