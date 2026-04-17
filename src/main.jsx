import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Timeline from './pages/timeline/Timeline';
import Stats from './pages/stats/Stats';
import Homepage from './pages/homepage/Homepage';
import FriendDetails from './pages/friendDetails/FriendDetails';
import Friends from './components/homepage/Friends';
import ContactFriendsProvider from './context/ContactFriendsContext';
import { ToastContainer } from 'react-toastify';

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
          path: '/friends',
          element: <Friends></Friends>
        },
        {
          path: '/friends/:id',
          element:<FriendDetails></FriendDetails>
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
     <ContactFriendsProvider>
      <RouterProvider router={router} />
     </ContactFriendsProvider>
     <ToastContainer />
  </StrictMode>,
)
