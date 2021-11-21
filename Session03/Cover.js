import { Node } from "./Node.js";
export class Cover extends Node {
    constructor(){
        super();
        setBackGroundColor("orange");
        this.view.style.backgroundColor = "orange";
    }
}