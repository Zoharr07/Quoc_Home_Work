let fileName = [
    "url('./img/1.jpeg')",
    "url('./img/2.jpeg')",
    "url('./img/3.jpeg')",
    "url('./img/4.jpeg')",
    "url('./img/5.jpeg')",
    "url('./img/6.jpeg')",
    "url('./img/7.jpeg')",
    "url('./img/8.jpeg')",
    "url('./img/9.jpeg')",
    "url('./img/10.jpeg')",
]

class Card {
    constructor(){
        this._id = 0;
        this._value = 0;
        this._width = 100;
        this._height = 120;
        this._top = 0;
        this._left = 0;
        this._margin = 4;
        this._coverColor = 'orange';
        this.initView();
        this.view.style.display = "";
        this.view.style.position = "absolute";
    }
    initView(){
        this.view = document.createElement('div');
        //view.addEventListener('mousedown', onClickCard.bind());
    }
    setCardValue(idNum, value, topNum, leftNum){
        this._id = idNum;
        this._value = value;  
        this._top = topNum;
        this._left = leftNum;
    }


    initCard(){
        view.style.width = _width + 'px';
        view.style.height = _height + 'px';
        view.style.top = _top + "px";
        view.style.left = _left + "px";
        view.style.margin = _margin + "px";
        view.style.backgroundSize = "contain";
        view.style.backgroundRepeat = "no-repeat";
        //card.style.backgroundImage = fileName[_value];
        view.id = "card" + _id;
    }  
}
    
