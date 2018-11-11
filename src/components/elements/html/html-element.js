class HtmlElement extends Element {
    constructor(element) {
        super();

        this._element = element;

        this.setPosition(parseInt(element.style.left) || 0, parseInt(element.style.top) || 0);
    }

    getElement() {
        return this._element;
    }

    setPosition(x, y) {
        super.setPosition(x, y);

        this._element.style.left = this._toPixels(x);
        this._element.style.top = this._toPixels(y);
    }

    bindMouseDown(event) {
        this._element.addEventListener('mousedown', event);
    }

    bindMouseUp(event) {
        this._element.addEventListener('mouseup', event);
    }

    _toPixels(value) {
        return `${value}px`;
    }

    destroy() {
        this._element.parentNode.removeChild(this._element);
    }
}