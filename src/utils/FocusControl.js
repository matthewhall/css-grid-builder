import { KEY_CODES } from '@/constants';

export default class {
  constructor() {
    this.element = document.createElement('style');
    this.cssSnippet = ':focus{outline:0}::-moz-focus-inner{border:0}:focus-within *{outline:0 !important}';

    document.querySelector('head').appendChild(this.element);

    this.mouseDownHandler = document.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.keyDownHandler = document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleMouseDown() {
    this.element.innerHTML = this.cssSnippet;
  }

  handleKeyDown(event) {
    if (event.keyCode === KEY_CODES.TAB) {
      this.element.innerHTML = '';
    }
  }

  destroy() {
    document.removeEventListener('mousedown', this.mouseDownHandler);
    document.removeEventListener('keydown', this.keyDownHandler);

    if (this.element) {
      document.querySelector('head').removeChild(this.element);
    }

    this.element = null;
  }
}
