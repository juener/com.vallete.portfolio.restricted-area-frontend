import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/@layouts/app'
import { AuthLayout } from './pages/@layouts/auth'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders'
import { BasicAuthentication } from './pages/auth/basic-authentication'
import { PasswordlessAuthentication } from './pages/auth/passwordless-authentication'
import { Register } from './pages/auth/register'
import { NotFound } from './pages/errors/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/passwordless-authentication',
        element: <PasswordlessAuthentication />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
      { path: '/auth/basic-authentication', element: <BasicAuthentication /> },
    ],
  },
])
