/**
 * @typedef {object} StageViewProps
 * @prop {React.ReactNode} children
 * @prop {number} stageIdx
 */

/**
 * The view into all the stages of the game.
 * @param {StageViewProps} props
 */
export default function StageView (props) {
  const { stageIdx } = props
  let { children } = props

  if (!children) {
    throw new TypeError('Children must not be empty!')
  }
  if (!Array.isArray(children)) {
    children = [children]
  }

  if (stageIdx >= children.length) {
    throw new RangeError('Current stage index is larger than number of stages!')
  }

  return children[stageIdx]
}
