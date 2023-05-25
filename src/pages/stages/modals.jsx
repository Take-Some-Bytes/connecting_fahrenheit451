import React from 'react'
import ReactModal from 'react-modal'

import AppearingContent from '../../util-components/appearingcontent'

import { APS } from '../../constants'

import './modals.css'

/**
 * @typedef {object} CorrectModalProps
 * @prop {boolean} isOpen
 * @prop {VoidFunction} nextStage
 */

/**
 * @typedef {object} IncorrectModalProps
 * @prop {boolean} isOpen
 * @prop {VoidFunction} onClose
 */
/**
 * A modal which should be shown if the player picked correctly.
 * @param {CorrectModalProps} props
 */
export function CorrectModal (props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      className='modal'
      overlayClassName='modal__overlay'
    >
      <AppearingContent lettersPerSecond={APS}>
        As you note that on your piece of paper, you notice some movement in your
        peripheral vision. You look up, but all you see is Ms. Robinson with her
        head bent over her desk.
      </AppearingContent>
      <div className='stage__button-container'>
        <button
          className='internal-link stage__button'
          onClick={() => props.nextStage()}
        >
          Continue
        </button>
      </div>
    </ReactModal>
  )
}

/**
 * A modal which should be shown if the player picked correctly.
 * @param {IncorrectModalProps} props
 */
export function IncorrectModal (props) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      className='modal'
      overlayClassName='modal__overlay'
    >
      <AppearingContent lettersPerSecond={APS}>
        Just before you note that on your piece of paper, you hear movement. Looking
        up, you see Ms. Robinson staring at you. You decide that it's best not to keep
        writing.
      </AppearingContent>
      <div className='stage__button-container'>
        <button
          className='internal-link stage__button'
          onClick={() => props.onClose()}
        >
          Close
        </button>
      </div>
    </ReactModal>
  )
}
