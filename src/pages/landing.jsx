import React from 'react'
import { Link } from 'react-router-dom'

import './landing.css'
import '../common-styles/headers.css'
import '../common-styles/link.css'

/**
 * Landing page.
 */
export default function Landing () {
  return (
    <article id='landing-main'>
      <header id='landing-header'>
        <h1>Connecting Fahrenheit 451</h1>
      </header>
      <p>
        You've read Fahrenheit 451 and connected a poem to it; now can you use what you've
        learned to escape?
      </p>
      <nav id='landing-nav'>
        <Link to='/play' className='nav-link'>Begin</Link>
        <Link to='/continue' className='nav-link'>Continue</Link>
        <Link to='/about' className='nav-link'>About</Link>
      </nav>
      <footer id='landing-footer'>
        Copyright (c) 2023 Haoting (Horton) Cheng. Licensed under
        the <a href='https://www.gnu.org/licenses/agpl-3.0-standalone.html'>AGPL-3.0</a>.
      </footer>
    </article>
  )
}
