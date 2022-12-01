import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import components
import Home from './views/Home/Home';
import History from './views/History/History';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/history',
      element: <History />,
    },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;