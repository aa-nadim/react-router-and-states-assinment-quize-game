import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Statistics from '../components/Statistics/Statistics';
import Topics from '../components/Topics/Topics';
import Main from '../layouts/Main';

import Quizes from '../components/Quizes/Quizes';
import ErrorPage from '../components/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`);
        },
        element: <Topics />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'quiz/:id',
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Quizes />,
      },
      {
        path: '/statistics',
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`);
        },
        element: <Statistics />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);
