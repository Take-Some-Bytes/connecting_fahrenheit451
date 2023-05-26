/**
 * Poem analysis stages.
 */

import React from 'react'

import { InteractiveStage } from './stage'

/** @typedef {import('./all').InteractionStageProps} InteractionStageProps */

/**
 * @param {InteractionStageProps} props
 */
export function Perspective (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'These lines reveal that the speaker has eyes.' },
        { content: 'These lines reveal that the speaker is looking at the world.' },
        { content: 'These lines reveal that the speaker is African-American.', correct: true }
      ]}
      key='ais1'
    >
      You read the poem, looking for thematic elements you can discuss in whatever
      Ms. Robinson throws at you next &mdash; probably a paragraph. You notice as well
      that there's a few pieces of scrap paper in front of you, probably for your notes.

      <br />
      <br />

      On your first read-through, some lines immediately stand out to you.

      <p className='poem-text'>
        I look at the world<br />
        From awakening eyes in a black face—<br />
        ...<br />
        I look then at the silly walls<br />
        Through dark eyes in a dark face—<br />
        ...<br />
      </p>
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function Segregation (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'These lines reveal that the speaker lives in a fenced area.' },
        { content: 'These lines reveal that the speaker sees a narrow space.' },
        { content: 'These lines reveal that the speaker faces segregation.', correct: true }
      ]}
      key='ais2'
    >
      After noting down the speaker's perspective, you jump back to the third,
      fourth, and fifth lines.
      <p className='poem-text'>
        ...<br />
        And this is what I see:<br />
        This fenced-off narrow space<br />
        Assigned to me.<br />
        ...
      </p>
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function Metaphor (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'This is a simile comparing oppression to walls.' },
        { content: 'This has no name. I don\'t know what you mean.' },
        { content: 'This is a metaphor comparing oppression to walls.', correct: true }
      ]}
      key='ais3'
    >
      Then, you realize that the speaker mentions walls and oppression quite a
      bit, and that this has a name.
      <p className='poem-text'>
        I look then at the silly walls<br />
        ...<br />
        And this is what I know:<br />
        That all these walls oppression builds<br />
        Will have to go!<br />
        ...
      </p>
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function RealizeOppression (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'They both talk about facial features.' },
        { content: 'They suggest that the speaker can see now.' },
        { content: 'They suggest that the speaker is finally seeing the problems in their world.', correct: true }
      ]}
      key='ais4'
    >
      Next, you are drawn into these lines. Both talk of eyes.
      <p className='poem-text'>
        ...<br />
        From awakening eyes in a black face—<br />
        ...<br />
        With eyes no longer blind—<br />
        ...
      </p>
    </InteractiveStage>
  )
}

/**
 * @param {InteractionStageProps} props
 */
export function RealizeChange (props) {
  return (
    <InteractiveStage
      nextStage={props.nextStage}
      increaseMistakes={props.increaseMistakes}
      buttons={[
        { content: 'It reveals that the speaker is going to find a road.' },
        { content: 'It reveals that the speaker can make their childhood dreams a reality.' },
        { content: 'It reveals that the speaker realizes change can happen.', correct: true }
      ]}
      key='ais5'
    >
      Finally, you look at the last stanza. You have a feeling that it's going to
      be very, very powerful.
      <p className='poem-text'>
        ...<br />
        I look at my own body<br />
        With eyes no longer blind—<br />
        And I see that my own hands can make<br />
        The world that's in my mind.<br />
        Then let us hurry, comrades,<br />
        The road to find.
      </p>
    </InteractiveStage>
  )
}
