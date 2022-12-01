import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/sports',
      element: <Sports />,
    },
    {
      path: '/history',
      element: <History/>,
    },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;