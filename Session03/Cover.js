import { Node } from './Node.js';
export class Cover extends Node {
    constructor(){
        super();
        this.view.style.backgroundColor = "orange";
        this.view.style.width = "190px";
        this.view.style.height = "190px";
    }
    setBGColor(){
        this.view.style.backgroundColor = "orange";
    }
}