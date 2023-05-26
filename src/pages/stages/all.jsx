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
export * from './connect'

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
      <AppearingContent lettersPerSecond={APS} onComplete={onComplete} key='aa1'>
        You're about to note that down, when suddenly, Ms. Robinson stands up.
        <br />
        <br />
        "That's it. Get out," she says firmly.
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
    <Stage showSkip={!showContinue} showContinue={showContinue} nextStage={nextStage}>
      <AppearingContent lettersPerSecond={APS} onComplete={onAppearingContentComplete} key='aa2'>
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
      <AppearingContent lettersPerSecond={APS} onComplete={onAppearingContentComplete} key='aa3'>
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

/**
 * @param {StageProps} props
 */
export function Intro3 (props) {
  const { showContinue, nextStage, onAppearingContentComplete } = props

  return (
    <Stage showSkip={!showContinue} showContinue={showContinue} nextStage={nextStage}>
      <AppearingContent lettersPerSecond={APS} onComplete={onAppearingContentComplete} key='aa4'>
        After you finish writing all your thoughts down, you put down your pencil
        and stretch briefly. Before you manage to start working on your paragraph,
        however, you notice Ms. Robinson standing in front of you.
        <br />
        <br />
        "Very good. Now, I want you to connect that poem with the novel you studied
        earlier this semester," Ms. Robinson says. She then walks back to her desk.
        <br />
        <br />
        You sigh again. You have to <i>connect</i> a poem to a novel? Better get
        thinking, you hear yourself say.
      </AppearingContent>
    </Stage>
  )
}

/**
 * @param {{ totalMistakes: number }} props
 */
export function Conclusion (props) {
  const [showButtons, setShowButtons] = useState(false)
  const navigate = useNavigate()

  function onComplete () {
    setShowButtons(true)
  }
  function onClick () {
    clearGameData()
    navigate('/')
  }

  const buttons = (
    <div className='stage__button-container'>
      <button className='stage__button internal-link' onClick={onClick}>
        Back to menu
      </button>
    </div>
  )

  return (
    <Stage>
      <AppearingContent lettersPerSecond={APS} onComplete={onComplete} key='aa4'>
        You finish writing down all of the connections. You sigh, thinking about
        how big your project will have to be in order to present all of this. Then,
        you feel someone looking awkwardly over your shoulder.
        <br />
        <br />
        "Good," says Ms. Robinson, satisfied. "I think that's enough work for today.
        You're free to go."
        <br />
        <br />
        You walk out the door, waving goodbye to Ms. Robinson.
        <p className='poem-text'>
          Completed with {props.totalMistakes} mistake(s).
        </p>
      </AppearingContent>
      {showButtons && buttons}
    </Stage>
  )
}
