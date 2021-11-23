import { Node } from "./Node.js";
import { Card } from "./Card.js";


let canClick = true;
let firstIndex = null;
let firstValue = null;
let cards = [];

let colum = 5;
let row = 4;
let offsetX = 20;
let offsetY = 100;
let count = 0;
let scoreTotal = 10000;
let cardRemain = colum * row;

export class GameController extends Node {
    constructor() {
        super();
        this._cardWidth = 100;
        this._cardHeight = 130;
        this._row = 4;
        this._colum = 5;
        this.initGameBackground();
    }
    initGameBackground() {
        document.body.appendChild(this.element);
        this.element.style.width = offsetX + this._colum * (this._cardWidth + offsetX) + "px";
        this.element.style.height = offsetY + this._row * (this._cardHeight + offsetX) + "px";
        this.element.style.backgroundColor = "#ccffcc";
    }
}