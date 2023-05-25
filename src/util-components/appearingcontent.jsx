import React, { useEffect, useRef, useState } from 'react'

/**
 * @typedef {object} AppearingContentProps
 * @prop {number} lettersPerSecond
 * @prop {VoidFunction} onComplete
 */

/**
 * React hook to handle gradually appearing content.
 * @param {Array<any>} content The full content to display.
 * @param {number} delay The delay (in ms) between the display of each letter.
 * @param {VoidFunction} [onComplete] A function to call when all content is
 * being displayed.
 * @returns {Array<any>}
 */
export function useAppearingContent (content, delay, onComplete = () => {}) {
  const [index, setIndex] = useState(0)
  const timeout = useRef(null)

  function appear () {
    setIndex(prev => prev + 1)

    if (index < content.length) {
      timeout.current = setTimeout(appear, delay)
    } else {
      onComplete()
    }
  }

  useEffect(() => {
    timeout.current = setTimeout(appear, delay)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [content, delay])

  return content.slice(0, index)
}

/**
 * Shows content which appears gradually.
 * @param {React.PropsWithChildren<AppearingContentProps>} props The text to show!
 */
export default function AppearingContent (props) {
  let { children } = props
  if (!Array.isArray(children)) {
    children = [children]
  }

  children = children.flatMap(val => {
    if (typeof val === 'string') {
      return strToArray(val)
    }

    return val
  })

  const content = useAppearingContent(children, 1000 / props.lettersPerSecond, props.onComplete)

  return <span>{content}</span>
}

/**
 * Separate a string's characters into an array.
 * @param {string} str
 * @returns {Array<string>}
 */
function strToArray (str) {
  return [...str]
}
