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

let cardList = [];

makeRandomListCard();

var mainBG = document.createElement("div")
document.body.appendChild(mainBG)
mainBG.style.width = col * (cardInfo.width + cardInfo.margin * 2).toString() + "px";
mainBG.style.backgroundColor = "brown";
mainBG.style.display = "flex";
mainBG.style.flexWrap = "wrap";

instanceCard();



function addElement(cardRef) {
    var cards = document.createElement("div"); 
    mainBG.appendChild(cards);
    setCard(cards, cardRef)
   
    

    
    var cover = document.createElement("div");
    cards.appendChild(cover);
    setCover(cardRef, cover);

    var numLabel = document.createElement("div");
    cover.appendChild(numLabel);
    numLabel.style.position = "absolute";
    numLabel.innerHTML = cardRef.cardNumber;
    numLabel.style.fontSize = "30px";

    addEvenListenerCard(cards, cover);
    
}


function instanceCard(){
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
}

function makeRandomListCard(){
    createListCard(10, 2);
    console.log(cardList);
    cardList = shuffle(cardList);
    console.log(cardList);
}

function createListCard(number, numberRep){
    for(let i = 0; i < number; i++){
        for(let j = 0; j < numberRep; j++){
            cardList.push(i);
        }
    }  
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }  
    return array;
}

function addEvenListenerCard(_card, _cover){
    _card.addEventListener('mousedown', function(){
        if(_cover.style.display != 'none') {
            
            if(openedCard.length < 2){
                _cover.style.display = 'none';
                openedCard.push(_cover);
            }
            else{
                openedCard[0].style.display = "inline";
                openedCard[1].style.display = "inline";
                openedCard = []
            }
        }
            
        
    })
}

function setCover(_card, _cover){
    _cover.style.top  = _card.top + "px";
    _cover.style.left  = _card.left + "px";
    _cover.style.width  = _card.width + "px";
    _cover.style.height  = _card.height + "px";
    _cover.style.backgroundColor = "green";
}

function setCard(cards,_card){
    cards.style.width = _card.width + "px";
    cards.style.height = _card.height + "px";
    cards.style.top = _card.top + "px";
    cards.style.left = _card.left + "px";
    cards.style.margin = _card.margin + "px";
    cards.style.backgroundImage = fileName[_card.cardNumber]

    

    let fileName = [
        "url(./img/",
        "url(./img/",
        "url(./img/",
        "url(./img/",
        "url(./img/",
        "url(./img/",
        "url(./img/",
        "url(./img/",
        "url(./img/",
        "url(./img/",
    ]
}
