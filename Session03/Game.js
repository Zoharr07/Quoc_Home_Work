
import { Cover } from "./Cover.js";
import { Label } from "./Label.js";
import { Sprite } from "./Sprite.js";

let cover = new Cover();
let label = new Label();
label.string = 20;
cover.addChild(label);
console.log(cover);
document.body.appendChild(cover.view);