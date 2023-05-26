/**
 * Functions to manage game data.
 */

/**
 * A class to represent saved game data.
 */
export class GameData {
  constructor (stage, totalMistakes) {
    /** @type {number} */
    this.stage = stage
    /** @type {number} */
    this.totalMistakes = totalMistakes
  }
}

/**
 * Gets game data saved to local storage, if it exists.
 * @returns {GameData|null}
 */
export function getGameData () {
  const data = window.localStorage.getItem('save')
  if (!data) {
    return null
  }

  const parsed = JSON.parse(data)

  return new GameData(parsed.stage, parsed.totalMistakes)
}

/**
 * Saves game data to local storage.
 * @param {GameData} data The data to save.
 */
export function saveGameData (data) {
  console.log('saving game data')
  window.localStorage.setItem('save', JSON.stringify(data))
  window.localStorage.setItem('status', 'playing')
}

/**
 * Clears game data from local storage.
 */
export function clearGameData () {
  console.log('clearing game data')
  window.localStorage.removeItem('save')
  window.localStorage.setItem('status', 'completed')
}
