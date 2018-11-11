class CanvasRect extends CanvasElement {
    constructor(context, color, size) {
        super(context);

        this._color = color;
        this._size = size;
    }

    getSize() {
        return this._size;
    }

    render() {
        this._context.fillStyle = this._color;

        this._context.beginPath();

        this._context.rect(this._position.x, this._position.y, this._size, this._size);

        this._context.fill();
    }

    _isPointInElement(x, y) {
        const {x: elementX, y: elementY} = this._position;

        const isXInRange = x >= elementX && x <= elementX + this._size;
        const isYInRange = y >= elementY && y <= elementY + this._size;

        return isXInRange && isYInRange;
    }
}