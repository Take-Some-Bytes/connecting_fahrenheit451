/**
 * Connection stages.
 */

import React from 'react'

import { InteractiveStage } from './stage'

/** @typedef {import('./all').InteractionStageProps} InteractionStageProps */

/**
 * @param {InteractionStageProps} props
 */
export function Oppressions1 (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'Books are suppressed in Fahrenheit 451.' },
        { content: 'Differences are suppressed in Fahrenheit 451.' },
        { content: 'Freedom of thought and expression is suppressed in Fahrenheit 451.' },
        { content: 'All of the above are suppressed in Fahrenheit 451.', correct: true }
      ]}
      key='cis1'
    >
      Instead of having to think long and hard, however, you immediately realize
      that there are oppressions both in "I look at the world" <i>and</i> Fahrenheit 451.
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function Oppressions2 (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'Mildred is a good example of these oppressions.' },
        { content: 'Beatty\'s lecture reveals how hated differences are.', correct: true },
        { content: 'Faber\'s talk to Montag reveals a lot of things.', correct: true }
      ]}
      key='cis2'
      randomize
    >
      How do you know that books, freedom of thought and expression, and differences
      are suppressed in Fahrenheit 451 though? What reveals that?
      <br />
      <br />
      You think for a bit.
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function Oppressions3 (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'I still think Mildred is a good example of these oppressions.' },
        { content: 'The other firemen show how similar everyone is.' },
        { content: 'Clarisse is different, and no one seems to like that.', correct: true }
      ]}
      key='cis3'
      randomize
    >
      You wonder if there are any other times where this is revealed.
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function Acknowledge (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'Montag realizes this after the woman burns herself with her books.', correct: true },
        { content: 'Montag realizes this after dealing with Mildred\'s friends.', correct: true },
        { content: 'Montag realizes this after talking with Faber.', correct: true }
      ]}
      key='cis4'
      randomize
    >
      After making that first connection, you struggle slightly making another
      one. But suddenly, you get one. Both Montag and the speaker eventually realize
      that their worlds have problems.
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function ChangeIsPossible1 (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'Both the speaker and some characters in Fahrenheit 451 stay the same.' },
        { content: 'Both the speaker and some characters in Fahrenheit 451 change the world.' },
        { content: 'Both the speaker and some characters in Fahrenheit 451 realize that change is possible', correct: true }
      ]}
      key='cis5'
      randomize
    >
      You want to make one more connection. However, it seems like there are no
      more connections to be made.
      <br />
      <br />
      You sigh. Looks like that will be it. You look up, ready to call Ms. Robinson
      over for more instructions. But before you do that, you see a poster above
      her desk that you are sure wasn't there before.
      <p className='poem-text'>
        <i>BE THE CHANGE</i>
      </p>
      <br />
      You then get it. It's a bit of a stretch, but the connection's there.
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function ChangeIsPossible2 (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: '"Then let us hurry, comrades, / The road to find."' },
        { content: '"this is what I know: / That all these walls oppression builds / Will have to go!"' },
        { content: '"I see that my own hands can make / The world that\'s in my mind."', correct: true }
      ]}
      key='cis6'
      randomize
    >
      Where in "I look at the world" does this happen though?
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function ChangeIsPossible3 (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'Beatty\'s lecture when he talks about the current state of the world.' },
        { content: 'Faber\'s (initially reluctant) optimism that they can change things after the war', correct: true },
        { content: 'Montag\'s thinking and Granger\'s belief that they can change things.', correct: true }
      ]}
      key='cis7'
      randomize
    >
      You think you're done. Then you remember that you still need to find where
      in Fahrenheit 451 proves this.
    </InteractiveStage>
  )
}
