class RealEditor {
    
    getXButton() {
        if (this.xButton) return this.xButton;
        let xButton = document.createElement('span');
        xButton.id = 'real-editor-x-button';
        xButton.innerHTML = 'X';
        xButton.style.position = 'absolute';
        xButton.style.color = 'red';
        xButton.style.cursor = 'pointer';
        document.body.append(xButton);
        xButton.addEventListener('click', function() {
            xButton.target.parentNode.removeChild(xButton.target);
        });
        return this.xButton = xButton;
    }
    
    init() {
        let xButton = this.getXButton();
        document.body.addEventListener('mouseover', function(event) {
            if (event.target.id == 'real-editor-x-button') return;
            let pos = event.target.getBoundingClientRect();
            xButton.style.top = pos.y + 'px';
            xButton.style.left = pos.x + 'px';
            xButton.target = event.target;
        });
    }
}

(window.RealEditorInst = new RealEditor).init();
