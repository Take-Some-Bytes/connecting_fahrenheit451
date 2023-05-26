import React from 'react'

import '../common-styles/headers.css'
import '../common-styles/link.css'

/**
 * About page.
 */
export default function About () {
  return (
    <article id='about-main'>
      <header>
        <h1>About</h1>
      </header>
      <br />
      <p>
        Made for an English 9H project.
        <br />
        <br />
        I realized only after I was basically done that this is just like a
        Kahoot. I should have done a Kahoot. AAAAAAAAAAAAAAAAA.
        <br />
        <br />
        This project is licensed under the&nbsp;
        <a href='https://www.gnu.org/licenses/agpl-3.0-standalone.html' className='external-link'>
          GNU Affero General Public License
        </a>.
        &nbsp;
        You can find its source on GitHub,&nbsp;
        <a href='https://github.com/Take-Some-Bytes/connecting_fahrenheit451' className='external-link'>
          here
        </a>.
      </p>
    </article>
  )
}
