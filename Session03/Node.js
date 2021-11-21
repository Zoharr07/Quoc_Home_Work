export class Node {
    constructor(){
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._active = true;
        this._children = [];
        this.initView();
        this.view.style.display = "";
        this.view.style.position = "absolute";
    }

    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
        this.view.style.left = this._x + 'px';
    }

    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
        this.view.style.top = this._y + 'px';
    }

    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
        this.view.style.width = this._width + 'px';
    }

    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
        this.view.style.height = this._height + 'px';
    }

    get active() {
        return this._active;
    }
    set active(isActive) {
        this._active = isActive;
        if(isActive) this.view.style.display = "";
        
    }

    initView(){
        this.view = document.createElement('div');
    }

    addChild(node){
        this._children.push(node);
        this.view.appendChild(node.view);
    }
    
    setSize(widths, heights){
        this.width = widths;
        this.height = heights;
    }

    setPosition(posX, posY){
        this.x = posX;
        this.y = posY;
    }
    
}