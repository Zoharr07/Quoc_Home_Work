import { Node } from './Node.js';
export class Sprite extends Node {
    constructor(src){
        super();
        this.initView();
        this.element.style.position = "absolute";
    }
    initView() {
        this.element = document.createElement('img');
    }
    setImage(src){
        this.element.src = src;
    }
}