import React, { useState } from 'react'

import { CorrectModal, IncorrectModal } from './modals'

import '../../common-styles/link.css'

import './stage.css'

/**
 * @typedef {object} Button
 * @prop {boolean} correct
 * @prop {React.ReactNode} content
 */

/**
 * @typedef {object} StageProps
 * @prop {boolean} showSkip
 * @prop {boolean} showContinue
 * @prop {VoidFunction} nextStage
 */

/**
 * @typedef {object} InteractiveStageProps
 * @prop {boolean} showButtons
 * @prop {VoidFunction} nextStage
 * @prop {VoidFunction} increaseMistakes
 * @prop {Array<Button>} buttons
 */

/**
 * A single stage of the game.
 * @param {React.PropsWithChildren<StageProps>} props
 */
export function Stage (props) {
  const onClick = () => props.nextStage()

  return (
    <>
      {props.children}
      <div className='stage__button-container'>
        {props.showSkip &&
          <button className='internal-link stage__button' onClick={onClick}>
            Skip&gt;&gt;
          </button>}
        {props.showContinue &&
          <button className='internal-link stage__button' onClick={onClick}>
            Continue
          </button>}
      </div>
    </>
  )
}

/**
 * A stage of the game, with interactive buttons and a modal.
 * @param {React.PropsWithChildren<InteractiveStageProps>} props
 */
export function InteractiveStage (props) {
  const [showRight, setShowRight] = useState(false)
  const [showWrong, setShowWrong] = useState(false)

  function nextStage () {
    setShowRight(false)
    props.nextStage()
  }

  const buttons = (
    <div className='interactive-stage__button-container'>
      {props.buttons.map((b, i) => {
        let func = () => {
          setShowWrong(true)
          props.increaseMistakes()
        }
        if (b.correct) {
          func = () => setShowRight(true)
        }

        return (
          <button className='interactive-stage__button' key={i} onClick={func}>
            {b.content}
          </button>
        )
      })}
    </div>
  )

  return (
    <>
      {props.children}
      {props.showButtons && buttons}
      <CorrectModal isOpen={showRight} nextStage={nextStage} />
      <IncorrectModal isOpen={showWrong} onClose={() => setShowWrong(false)} />
    </>
  )
}
