/**
 * Small script to make viewport-relative units work.
 */

import debounce from 'debounce'

function computeVunits () {
  const vh = window.innerHeight / 100
  const vw = window.innerWidth / 100

  document.documentElement.style.setProperty('--vh', `${vh}px`)
  document.documentElement.style.setProperty('--vw', `${vw}px`)
}

window.addEventListener('resize', debounce(computeVunits, 100))

// Call it once first
computeVunits()
