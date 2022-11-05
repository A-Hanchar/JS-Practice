import { Stopwatch } from './Stopwatch.js'

export class StopwatchHTML extends Stopwatch {
  #attribute = 'data-stopwatch'
  #disabledAttribute = 'disabled'

  constructor(placeIdOfRender) {
    super()
    this.placeIdOfRender = placeIdOfRender
    this.stopwatchHTML = this.generateStopwatchHTML()
    this.timeContainer = this.generateTimeContainer()
    this.manageButtonsContainer = this.generateManageButtonsContainer()
    this.startButton = this.generateStartButton()
    this.stopButton = this.generateStopButton()
    this.resetButton = this.generateResetButton()
  }

  set placeIdOfRender(id) {
    this._placeIdOfRender = id
  }

  get placeIdOfRender() {
    return this._placeIdOfRender
  }

  generateStopwatchHTML() {
    const container = document.createElement('div')
    container.style.cssText = `
      width: 100vw;
      height: 100vh;
      background: #17EFF2;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    `

    return container
  }

  generateTimeContainer() {
    const timeContainer = document.createElement('div')
    timeContainer.setAttribute(this.#attribute, 'timeContainer')
    timeContainer.style.cssText = `
      font-size: 3rem;
      font-weight: 700;
    `

    return timeContainer
  }

  generateManageButtonsContainer() {
    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute(this.#attribute, 'manageButtonsContainer')
    buttonsContainer.style.cssText = `
      display: flex;
      gap: 0.5rem;
    `

    return buttonsContainer
  }

  getButton(buttonText) {
    const button = document.createElement('button')
    button.style.cssText = `
      min-width: 7rem;
      min-height: 2.5rem;
      border-radius: 0.5rem;
      border-width: 0;
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;
    `

    button.innerText = buttonText

    return button
  }

  generateStartButton() {
    const button = this.getButton('Start')

    const onclick = () => {
      this.start(this.renderStopwatchValue.bind(this))

      button.setAttribute(this.#disabledAttribute, true)

      this.stopButton.removeAttribute(this.#disabledAttribute)
      this.resetButton.removeAttribute(this.#disabledAttribute)
    }

    button.onclick = onclick

    return button
  }

  generateStopButton() {
    const button = this.getButton('Stop')
    button.setAttribute('disabled', true)

    const onclick = () => {
      this.stop()

      this.startButton.innerText = 'Continue'
      this.startButton.removeAttribute(this.#disabledAttribute)
    }

    button.onclick = onclick

    return button
  }

  generateResetButton() {
    const button = this.getButton('Reset')
    button.setAttribute('disabled', true)

    const onclick = () => {
      this.reset()
      this.renderStopwatchValue()

      this.startButton.innerText = 'Start'
      this.startButton.removeAttribute('disabled')

      this.stopButton.setAttribute('disabled', true)

      button.setAttribute('disabled', true)
    }

    button.onclick = onclick

    return button
  }

  renderStopwatchValue() {
    const { hours, minutes, seconds } = this.getTime()

    const convertHours = hours < 10 ? `0${hours}` : hours
    const convertMinutes = `0${minutes}`.slice(-2)
    const convertSeconds = `0${seconds}`.slice(-2)

    this.timeContainer.innerText = `${convertHours}:${convertMinutes}:${convertSeconds}`
  }

  renderStopwatch() {
    const renderPlaceContainer = document.getElementById(this.placeIdOfRender)

    if (!renderPlaceContainer) {
      throw new Error('Indicate correct place ID for render')
    }

    this.manageButtonsContainer.append(this.startButton, this.stopButton, this.resetButton)
    this.stopwatchHTML.append(this.timeContainer, this.manageButtonsContainer)
    renderPlaceContainer.append(this.stopwatchHTML)

    this.renderStopwatchValue()
  }
}
