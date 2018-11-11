(function () {
    document.addEventListener('DOMContentLoaded', onReady);

    const size = 100;
    const color = 'pink';

    function onReady() {
        const canvasManger = CanvasInitializer.initialize('.main-canvas');

        ElementInitializer.initialize('.item-rect', canvasManger, context => new CanvasRect(context, color, size));
        ElementInitializer.initialize('.item-circle', canvasManger, context => new CanvasCircle(context, 'pink', size / 2));
    }
}());
