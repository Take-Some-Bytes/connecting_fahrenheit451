/**
 * Application entrypoint.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Root from './root.jsx'
import Landing from './pages/landing.jsx'
import ErrorPage from './pages/error.jsx'

import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path='/'
    element={<Root />}
    errorElement={<ErrorPage />}
  >
    <Route errorElement={<ErrorPage />}>
      <Route index element={<Landing />} />
    </Route>
  </Route>
))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
