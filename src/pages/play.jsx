import React, { useEffect, useState } from 'react'

import { Stage } from './stages/stage'
import StageView from './stages/stageview'

import {
  Fail,
  Intro1,
  Intro2,
  Intro3,
  Perspective,
  Segregation,
  Metaphor,
  RealizeOppression,
  RealizeChange,
  Oppressions1,
  Oppressions2,
  Oppressions3,
  Acknowledge,
  ChangeIsPossible1,
  ChangeIsPossible2,
  ChangeIsPossible3,
  Conclusion
} from './stages/all'

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
        <Segregation nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <Metaphor nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <RealizeOppression nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <RealizeChange nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <Intro3 showContinue={showContinue} nextStage={nextStage} onAppearingContentComplete={onComplete} />
        <Oppressions1 nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <Oppressions2 nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <Oppressions3 nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <Acknowledge nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <ChangeIsPossible1 nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <ChangeIsPossible2 nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <ChangeIsPossible3 nextStage={nextStage} increaseMistakes={increaseMistakes} />
        <Conclusion totalMistakes={state.totalMistakes} />
        <Stage>
          The end!
        </Stage>
      </StageView>
    </article>
  )
}
