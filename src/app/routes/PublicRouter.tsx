import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { PublicLayout } from 'app/layout';
import { Entrance } from 'pages';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Entrance />,
      },
    ],
  },
];

export const publicRouter = createBrowserRouter(publicRoutes);
