import { Node } from './Node.js';
export class Cover extends Node {
    constructor(){
        super();
        this.setCoverColor("orange");
    }
    setCoverColor(color){
        this.element.style.backgroundColor = color;
    }
}