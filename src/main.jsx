import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import Friends from './pages/friends/Friends';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Timeline from './pages/timeline/Timeline';
import Stats from './pages/stats/Stats';
import Homepage from './pages/homepage/Homepage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          index: true,
          element: <Homepage></Homepage>
        },
        {
      path: '/timeline',
      element: <Timeline></Timeline>
        },
        {
          path: '/stats',
          element: <Stats></Stats>
        }
      ],
      errorElement: <ErrorPage></ErrorPage>
    },
   
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
