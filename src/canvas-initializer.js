class CanvasInitializer {
    static initialize(selector) {
        const canvas = document.querySelector(selector);
        const canvasManager = new CanvasManager(canvas);

        this._updateCanvasSize(canvas);

        this._updateCanvasOnWindowResize(canvasManager);

        return canvasManager;
    }

    static _updateCanvasOnWindowResize(canvasManager) {
        window.addEventListener('resize', () => {
            this._updateCanvasSize(canvasManager.canvas);
            canvasManager.render();
        });
    }

    static _updateCanvasSize(mainCanvas) {
        mainCanvas.width = mainCanvas.parentNode.clientWidth;
        mainCanvas.height = mainCanvas.parentNode.clientHeight;
    }
}