import { Node } from "./Node";
export class Sprite extends Node {
    initView(){
        this.view = document.createElement('img');
    }
    setBackGround(background){
        this.view.src = background;
    }
}