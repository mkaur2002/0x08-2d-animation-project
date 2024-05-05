class Domel {
  #el = null

  get el() {
      return this.#el
  }

  constructor(sel) {
      if (typeof sel === 'string') {
          this.#el = document.querySelector(sel)
      } else if (sel instanceof HTMLElement) {
          this.#el = sel
      } else {
          throw new Error('Invalid selector or element provided')
      }
  }

  unhide() {
      if (this.el) {
          this.el.classList.remove('hidden')
      }
  }

  on(eventType, callback, options = {}) {
      if (this.el) {
          this.el.addEventListener(eventType, callback, options)
      }
  }

  off(eventType, callback, options = {}) {
      if (this.el) {
          this.el.removeEventListener(eventType, callback, options)
      }
  }
}
