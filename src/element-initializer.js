class ElementInitializer {
    static initialize(selector, canvasManger, createElement) {
        const element = document.querySelector(selector);

        this._createShadowElementOnMouseover(element, canvasManger, createElement)
        this._removeShadowItemOnWindowResize();
    }

    static _createShadowElementOnMouseover(element, canvasManger, createElement) {
        element.addEventListener('mouseover', () => {
            const newElement = this._cloneElement(element);

            const elementMover = new HtmlElementMover(new HtmlElement(newElement));

            this._bindOnPlaced(elementMover, canvasManger, createElement);
        })
    }

    static _cloneElement(element) {
        const {left, top} = element.getBoundingClientRect();

        const newElement = element.cloneNode();

        newElement.style.position = 'absolute';
        newElement.style.margin = '0';

        newElement.style.left = `${left}px`;
        newElement.style.top = `${top}px`;

        newElement.classList.add('shadow-item');

        document.body.appendChild(newElement);

        return newElement;
    }

    static _bindOnPlaced(targert, canvasManger, createElement) {
        targert.bindOnPlaced((x, y) => {
            const {left, top} = canvasManger.canvas.getBoundingClientRect();

            const newX = x - left;
            const newY = y - top;

            if (newX >= 0 && newY >= 0) {
                canvasManger.addElement(createElement, newX, newY);
            }

            targert.destroy();
        });
    }

    static _removeShadowItemOnWindowResize() {
        window.addEventListener('resize', () => {
            document.querySelectorAll('.shadow-item').forEach(x => {
                document.body.removeChild(x);
            });
        });
    }
}