import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import components
import Home from './views/Home/Home';
import History from './views/History/History';
import Game from './views/Game/Game';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/history',
      element: <History />,
    },
    {
      path: '/game/:id',
      element: <Game />,
    },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;