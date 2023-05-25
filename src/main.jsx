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

import Root from './root'
import Landing from './pages/landing'
import ErrorPage from './pages/error'
import Play from './pages/play'

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
      <Route path='/play' element={<Play />} />
    </Route>
  </Route>
))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
