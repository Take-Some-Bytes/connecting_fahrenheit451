/**
 * A file containing all the stages.
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Stage } from './stage'
import AppearingContent from '../../util-components/appearingcontent'

import { clearGameData } from '../../gamedata'
import { APS } from '../../constants'

import '../../common-styles/link.css'
import './stage.css'
import './all.css'

export * from './analysis'

/**
 * @typedef {object} StageProps
 * @prop {boolean} showContinue
 * @prop {VoidFunction} nextStage
 * @prop {VoidFunction} onAppearingContentComplete
 */

/**
 * @typedef {object} InteractionStageProps
 * @prop {VoidFunction} nextStage
 * @prop {VoidFunction} increaseMistakes
 */

/**
 * You're a failure. Go back to the main page.
 */
export function Fail () {
  const [showBack, setShowBack] = useState(false)
  const navigate = useNavigate()

  function onComplete () {
    setShowBack(true)
  }
  function onGoBack () {
    clearGameData()
    navigate('/')
  }

  const back = (
    <div className='stage__button-container'>
      <button className='internal-link stage__button' onClick={onGoBack}>
        Back to menu
      </button>
    </div>
  )

  return (
    <>
      <AppearingContent lettersPerSecond={APS} onComplete={onComplete} key='a0'>
        You're about to note that down, when suddenly, Ms. Robinson stands up.
        <br />
        <br />
        "That's it. Get out," she said firmly.
        <br />
        <br />
        You walk out the door.
      </AppearingContent>
      {showBack && back}
    </>
  )
}

/**
 * @param {StageProps} props
 */
export function Intro1 (props) {
  const { showContinue, nextStage, onAppearingContentComplete } = props

  return (
    <Stage showSkip={!showContinue} showContinue={showContinue} nextStage={nextStage} key='s1'>
      <AppearingContent lettersPerSecond={APS} onComplete={onAppearingContentComplete} key='a1'>
        A loud sound wakes you up from your comfortable nap. Still half-asleep,
        you open your eyes to find that you're sitting at a table. A whiteboard
        table, in fact. In front of you there's a piece of paper, with what looks
        like a poem on it.
        <br />
        <br />
        Another loud sound. This time, it sounds a lot like someone clearing their
        throat. You look up to see...
      </AppearingContent>
    </Stage>
  )
}

/**
 * @param {StageProps} props
 */
export function Intro2 (props) {
  const { showContinue, nextStage, onAppearingContentComplete } = props

  return (
    <Stage showSkip={!showContinue} showContinue={showContinue} nextStage={nextStage}>
      <AppearingContent lettersPerSecond={APS} onComplete={onAppearingContentComplete} key='a2'>
        ...Ms. Robinson staring down at you.
        <br />
        <br />
        "Took you long enough," Ms. Robinson growled. She gestured at the sheet of paper in
        front of you. "Now get to work. You know what to do."
        <br />
        <br />
        She walks back to her desk, leaving you alone with the sheet of paper. Looking down,
        you read.
        <br />
        <br />
        <i>I look at the world</i>
        <br />
        <br />
        You sigh. Another poem to analyze. Better get on it.
      </AppearingContent>
    </Stage>
  )
}
