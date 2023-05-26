import React from 'react'
import { Link } from 'react-router-dom'

import '../common-styles/headers.css'
import '../common-styles/link.css'
import './landing.css'

/**
 * Gets the text for the play button from the specified status.
 * @param {string|null} status The current status.
 * @returns {string}
 */
function getPlayTextFromStatus (status) {
  switch (status) {
    case null:
      return 'Play'
    case 'playing':
      return 'Continue'
    case 'completed':
      return 'Play Again'
    default:
      throw new Error('Unrecognized play status')
  }
}

/**
 * Landing page.
 */
export default function Landing () {
  const status = window.localStorage.getItem('status')
  const playText = getPlayTextFromStatus(status)

  return (
    <article id='landing-main'>
      <header>
        <h1>Connecting Fahrenheit 451</h1>
      </header>
      <p>
        You've read Fahrenheit 451 and connected a poem to it; now can you use what you've
        learned to escape?
      </p>
      <nav>
        <Link to='/play' className='internal-link'>{playText}</Link>
        <Link to='/about' className='internal-link'>About</Link>
      </nav>
      <footer>
        Copyright (c) 2023 Haoting (Horton) Cheng. Licensed under the&nbsp;
        <a href='https://www.gnu.org/licenses/agpl-3.0-standalone.html' className='external-link'>AGPL-3.0</a>.
      </footer>
    </article>
  )
}
