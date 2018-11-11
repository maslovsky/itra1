class HtmlElementMover extends ElementMover {
    constructor(element) {
        super(element);

        this._document = element.getElement().ownerDocument;

        this._initialize();
    }

    _bindMouseMove(event) {
        this._mouseMoveEvent = ({pageX, pageY}) => {
            event(pageX, pageY);
        };

        this._document.addEventListener('mousemove', this._mouseMoveEvent);
    }

    _unbindMouseMove() {
        this._document.removeEventListener('mousemove', this._mouseMoveEvent);
    }
}