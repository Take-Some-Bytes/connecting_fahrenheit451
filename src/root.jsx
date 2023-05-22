/**
 * Root of the application.
 */

import React from 'react'
import { Outlet } from 'react-router-dom'

import './root.css'

export default function Root () {
  return (
    <main id='app-main'>
      <Outlet />
    </main>
  )
}
