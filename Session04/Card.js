import { Cover } from "./Cover.js";
import { Label } from "./Label.js";
import { Node } from "./Node.js"
import { Sprite } from "./Sprite.js";

export class Card extends Node {
    constructor(index, value) {
        super();
        this._number = index;
        this._value = value;
        this._cover;
        this._label;
        this._sprite;
        this.setSize(100, 130);
        this.initCard(index, value);
        this.showCover(true);
        this.showCard(true);
    }

    initCard(index, value) {
        this.element.id = "card" + index;

        this._sprite = new Sprite();
        this._sprite.setImage("./img/" + value + ".jpeg");
        this._sprite.setSize(this.width, this.height);
        this._sprite.element.id = "sprite" + index;

        this._cover = new Cover();
        this._cover.element.id = "cover" + index;
        this._cover.setSize(this.width, this.height);

        this._label = new Label(index);
        this._label.setSize(50, 50);
        this._label.setPosition(this.width / 2 - 5, this.height / 2 - 10)
        this._label.element.id = "label" + index;

        this._cover.addChild(this._label);
        this.addChild(this._sprite);
        this.addChild(this._cover);
    }

    showCover(isShow) {
        if (isShow === true) {
            this._cover.element.style.display = "";
            this._sprite.element.style.display = "none"
        }
        else if (isShow === false) {
            this._cover.element.style.display = "none";
            this._sprite.element.style.display = ""
        }
    }

    showCard(isShow) {
        if (isShow === true) {
            this.element.style.display = "";
        }
        else if (isShow === false) {
            this.element.style.display = "none";
        }
    }
}


