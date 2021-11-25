import { Node } from "./Node.js";
import { Card } from "./Card.js";
import { Label } from "./Label.js"
import { Cover } from "./Cover.js";

export class GameController extends Node {
    constructor() {
        super();
        this._cardWidth = 100;
        this._cardHeight = 130;
        this._row = 4;
        this._colum = 5;
        this._offsetX = 20;
        this._offsetY = 100;

        this._canClick = true
        this._cardRemain = 0;
        this._scoreLabel = null;
        this._scoreBoard = null;
        this._scoreTotal = 1000;
        this._openedCard = null;
        this._cards = [];

        this.initGameBackground();
        this.initGame("new");
    }

    initGame(gameStatus) {
        if (gameStatus === "new") {
            this._cards = this._initListCard(10, 2);
            //this._cards = this._shuffeCard(this._cards)
            console.log(this._cards);
            this.instanceBoardGame()
            this._updateScore();
        }
    }

    instanceBoardGame() {
        let counter = 0
        for (let i = 0; i < this._row; i++) {
            for (let j = 0; j < this._colum; j++) {
                let card = new Card(counter + 1, this._cards[counter], this._cardWidth, this._cardHeight);
                card.setPosition(this._offsetX + j * (this._cardWidth + this._offsetX), this._offsetX + i * (this._cardHeight + this._offsetX))
                card.element.addEventListener("mousedown", this._onClickCard.bind(this, card))
                this.addChild(card);
                counter++;
            }
        }
        this._cardRemain = (counter);
    }


    initGameBackground() {
        document.body.appendChild(this.element);
        this.element.style.width = this._offsetX + this._colum * (this._cardWidth + this._offsetX) + "px";
        this.element.style.height = this._offsetY + this._row * (this._cardHeight + this._offsetX * 1.5) + "px";
        this.element.style.backgroundColor = "#ccffcc";
        this.initScoreBox()

    }
    initScoreBox() {
        this._scoreBoard = new Cover();
        this._scoreLabel = new Label();
        this._scoreBoard.addChild(this._scoreLabel);
        this._scoreBoard.element.style.width = this._cardHeight * 2 + "px";
        this._scoreBoard.element.style.height = this._cardWidth * (3 / 4) + "px";
        this._scoreBoard.element.style.backgroundColor = "#ffbf00";
        this._scoreBoard.element.style.position = "absolute";
        this._scoreBoard.element.style.left = (this._row * this._cardWidth - this._offsetX) / 2 + "px"
        this._scoreBoard.element.style.top = (this._colum * this._cardHeight - this._offsetX * 0.5) + "px"
        this._scoreBoard.element.style.borderRadius = "16px";
        this._scoreLabel.setPosition(this._cardWidth * (2.5 / 4), this._cardHeight / 5)
        this._scoreLabel.setSize(250, 120);
        this.addChild(this._scoreBoard);
        this._scoreLabel.element.id = "scoreView"
    }

    _initListCard(numberCard, mulNumber) {
        let cardList = [];
        for (let i = 1; i <= numberCard; i++) {
            for (let j = 1; j <= mulNumber; j++) {
                cardList.push(i);
            }
        }
        return cardList;
    }

    _shuffeCard(cardList) {
        cardList.sort(() => Math.random() - 0.5);
        return cardList;
    }

    _onClickCard(card) {
        if (!this._canClick) return;
        if (card.isOpen) return;
        card.flipOpen();
        if (this._openedCard === null) {
            this._openedCard = card;
            return;
        }
        this._canClick = false;
        if (card.valueCard() == this._openedCard.valueCard()) {
            console.log(true)
            this._cardRemain += -2;
            this._updateScore(1000)
            card.showCard(false);
            this._openedCard.showCard(false);
        } else {
            this._updateScore(-500)
            card.flipClose();
            this._openedCard.flipClose();
        }
        this._reset();
    }

    _updateScore(_value) {
        _value ? this._scoreTotal += _value : 0;
        let scoreView = document.getElementById("scoreView");
        scoreView.innerHTML = "Score: " + this._scoreTotal;
        scoreView.style.fontSize = "x-large"
        this._checkWinLose(this._scoreTotal);
    }

    _checkWinLose(_score) {
        if (_score <= 0) {
            this._scoreTotal = 0;
            this._doAfter(confirm("You Lose Game"), 1)
            window.location.reload();
        }
        if (this._cardRemain <= 0) {
            this._doAfter(confirm("You Win Game"), 1)
            window.location.reload();
        }
    }

    _reset() {
        let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        tl.delay(1)
        tl.add(() => {
            this._canClick = true;
            this._openedCard = null;
        })
    }
    _doAfter(func, time) {
        let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        tl.delay(time)
        tl.add(() => {
            func;
        })
    }
}



