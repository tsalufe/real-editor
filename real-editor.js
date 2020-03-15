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
    
    onMouseOver(event) {
            if (event.target.id == 'real-editor-x-button') return;
            let pos = event.target.getBoundingClientRect();
            this.getXButton().style.top = pos.y + 'px';
            this.getXButton().style.left = pos.x + 'px';
            this.getXButton().target = event.target;
    }
    
    init() {
        let self = this;
        document.body.addEventListener('mouseover', this.onMouseOver.bind(self));
    }
    
    destroy() {
        document.body.removeEventListener('mouseover', this.onMouseOver.bind(self));
        this.getXButton().parentNode.removeChild(this.getXButton());
    }
}

(window.RealEditorInst = new RealEditor).init();
