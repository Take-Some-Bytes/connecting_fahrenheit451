import React, { useEffect, useState } from 'react'

import { Stage } from './stages/stage'
import StageView from './stages/stageview'

import { Fail, Intro1, Intro2, Perspective } from './stages/all'

import { GameData, getGameData, saveGameData } from '../gamedata'
import { MAX_MISTAKES } from '../constants'

import './play.css'

export default function Play () {
  const [state, setState] = useState(getGameData() || new GameData(0, 0))
  const [showContinue, setShowContinue] = useState(false)

  function nextStage () {
    setState(prev => ({
      ...prev,
      stage: prev.stage + 1
    }))
    setShowContinue(false)
  }
  function increaseMistakes () {
    setState(prev => ({
      ...prev,
      totalMistakes: prev.totalMistakes + 1
    }))
  }
  function onComplete () {
    setShowContinue(true)
  }

  useEffect(() => {
    saveGameData(state)
  }, [state])

  if (state.totalMistakes > MAX_MISTAKES) {
    // Oops. You failed.
    return (
      <article id='play-main'>
        <Fail />
      </article>
    )
  }

  return (
    <article id='play-main'>
      <StageView stageIdx={state.stage}>
        <Intro1 showContinue={showContinue} nextStage={nextStage} onAppearingContentComplete={onComplete} />
        <Intro2 showContinue={showContinue} nextStage={nextStage} onAppearingContentComplete={onComplete} />
        <Perspective nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <Stage>
          The end!
        </Stage>
      </StageView>
    </article>
  )
}
