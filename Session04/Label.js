import { Node } from './Node.js';
export class Label extends Node {
    constructor(string) {
        super();
        this._string = string || "";
        this.string = this._string;
        this.element.style.color = 'black';
        this.element.style.fontSize = "x-large"
    }

    get string() {
        return this._string;
    }
    set string(value) {
        this._string = value;
        this.element.innerHTML = this._string;
    }
}
