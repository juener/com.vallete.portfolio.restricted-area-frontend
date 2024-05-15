import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/@layouts/app'
import { AuthLayout } from './pages/@layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { Orders } from './pages/app/orders'
import { Authentication } from './pages/auth/authentication'
import { CompleteRegister } from './pages/auth/complete-register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/authentication', element: <Authentication /> },
      {
        path: '/authentication/complete-register',
        element: <CompleteRegister />,
      },
    ],
  },
])
