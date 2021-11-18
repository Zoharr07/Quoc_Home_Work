var cardInfo = {
    cardNumber: 0,
    width: 120,
    height: 180,
    top: 0,
    left: 0,
    margin: 3,
    backGroudColor: "orange",
    backGroundImg: "./"
}
let counterClick = 0;
let row = 4;
let col = 5;
let openedCard = [];

var mainBG = document.createElement("div")
document.body.appendChild(mainBG)
mainBG.style.width = col * (cardInfo.width + cardInfo.margin * 2).toString() + "px";
mainBG.style.backgroundColor = "brown";
mainBG.style.display = "flex";
mainBG.style.flexWrap = "wrap";

function addElement(card) {
    var cards = document.createElement("div"); 
    mainBG.appendChild(cards);
    cards.style.width = card.width + "px";
    cards.style.height = card.height + "px";
    cards.style.top = card.top + "px";
    cards.style.left = card.left + "px";
    cards.style.margin = card.margin + "px";
    cards.style.backgroundImage = "url()"

    var cover = document.createElement("div");
    cards.appendChild(cover);
    cover.style.top  = card.top + "px";
    cover.style.left  = card.left + "px";
    cover.style.width  = card.width + "px";
    cover.style.height  = card.height + "px";
    cover.style.backgroundColor = "green";

    var numLabel = document.createElement("div");
    cover.appendChild(numLabel);
    numLabel.style.position = "absolute";
    numLabel.innerHTML = card.cardNumber;
    numLabel.style.fontSize = "30px";

    cards.addEventListener('mousedown', function(){
        openedCard.push
        if(cover.style.display != 'none') counterClick++;
        if(counterClick <= 2){
            cover.style.display = 'none';
        }
        else{
            counterClick = 0;
        }
    })
    
}
let countCard = 0;
for(let i = 0; i < col; i++){
    for(let j = 0; j < row; j++){
        let _cardOInfo = JSON.parse(JSON.stringify(cardInfo));
        countCard++;
        _cardOInfo.cardNumber += countCard;
        console.log(_cardOInfo.cardName)
        addElement(_cardOInfo);
    }
}

