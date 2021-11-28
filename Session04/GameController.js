import { Node } from "./Node.js";
import { Card } from "./Card.js";
import { Label } from "./Label.js"
import { Button } from "./Button.js";
export class GameController extends Node {
    constructor() {
        super();
        this._cardWidth = 105;
        this._cardHeight = 150;
        this._row = 4;
        this._colum = 5;
        this._offsetX = 15;
        this._offsetY = 100;
        this._centerX = this._colum * (this._cardWidth);
        this._centerY = this._row * (this._cardWidth + this._offsetX);

        this._canClick = true;
        this._cardRemain = 0;
        this._scoreLabel = null;
        this._scoreBoard = null;
        this._scoreTotal = 0;
        this._openedCard = null;
        this._cardValue = [];
        this._cardLists = [];
        this.initGameBackground();
    }

    initGame(gameStatus) {
        this._scoreTotal = 1000;
        if (gameStatus === "new") {
            this._cardValue = this._initValueCard(10, 2);
            //this._cardValue = this._shuffeCard(this._cardValue);
            if(this._cardLists.length == 0) this.instanceBoardGame();
            else {
                this.resetBoardGame();
            }            
        }
        if (gameStatus === "replay") {
            this.resetBoardGame();
        }
        this._distributeCards(this._cardLists);
        this._updateScore();
    }

    instanceBoardGame() {
        let counter = 0
        for (let i = 0; i < this._row; i++) {
            for (let j = 0; j < this._colum; j++) {
                let card = new Card(counter + 1, this._cardValue[counter], this._cardWidth, this._cardHeight);
                card.element.addEventListener("mousedown", this._onClickCard.bind(this, card))
                card.flipOpen();
                this.addChild(card);
                this._cardLists.push(card)
                counter++;
            }
        }
        this._cardRemain = this._cardLists.length;
    }

    _distributeCards(cardList){
        let counter = 0;
        for (let i = 0; i < this._row; i++) {
            for (let j = 0; j < this._colum; j++) {
                let posX = this._offsetX + j * (this._cardWidth + this._offsetX);
                let posY = this._offsetX + i * (this._cardHeight + this._offsetX);
                counter++;
                let card = cardList[counter-1]
                card.setPosition(this._centerX / 2 - this._offsetX, this._centerY / 2)
                card.setActive(false)
                card.isOpen = true;

                let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
                tl.delay(0.05 * counter)
                    .add(() => {
                        card.setActive(true);
                        card.flipClose();
                    })
                    .to(card, { duration: 1, ease: "elastic.inOut(1.5, 1)", x: posX, y: posY }, 1)
                    .add(() => {
                        card.isOpen = false;
                    } );
            }
        }
    }
    

    resetBoardGame() {
        for (let i = 0; i < this._cardLists.length; i++) {
            this._cardLists[i].element.zIndex = "0";
            this._cardLists[i].flipOpen();
            this._cardLists[i].setActive(true);
            this._cardLists[i].changeValueCard(this._cardValue[i])
        }
        this._cardRemain = this._cardLists.length;
    }

    initGameBackground() {
        document.body.appendChild(this.element);
        this.element.style.width = this._offsetX + this._colum * (this._cardWidth + this._offsetX) + "px";
        this.element.style.height = this._offsetY + this._row * (this._cardHeight + this._offsetX) + "px";
        this.element.style.backgroundImage = "url('./img/bg2.jpeg')";
        this.element.style.backgroundSize = "cover"
        this._initScoreBox()
        this._initButon()
    }

    _initScoreBox() {
        this._scoreBoard = new Node();
        this._scoreBoard.setSize(this._cardHeight * 1.5, this._cardWidth * (2.5 / 4))
        this._scoreBoard.setPosition(((this._colum - 4.5) * this._cardWidth) / 2, (this._offsetX + this._row * (this._cardHeight + this._offsetX)))
        this._scoreBoard.element.style.backgroundColor = "#ffbf00";
        //this._scoreBoard.element.style.border = "1px solid black";

        this._scoreLabel = new Label();
        this._scoreLabel.setPosition(this._cardWidth * 0.5, this._cardHeight / 7);
        this._scoreLabel.setSize(250, 120);
        this._scoreLabel.element.innerHTML = "Score: " + this._scoreTotal;
        this._scoreBoard.addChild(this._scoreLabel);
        this.addChild(this._scoreBoard);
    }

    _initButon() {
        this._playButton = new Button("Play", (this._colum - 1) * this._cardWidth, this._offsetX * 1.5 + this._row * (this._cardHeight + this._offsetX));
        this.addChild(this._playButton)
        this._playButton.element.addEventListener("mousedown", this._onStartGame.bind(this));

        this._replayButton = new Button("RePlay", (this._colum - 2.3) * this._cardWidth, this._offsetX * 1.5 + this._row * (this._cardHeight + this._offsetX));
        this.addChild(this._replayButton);
        this._replayButton.element.addEventListener("mousedown", this._onReplayGame.bind(this));
        this._replayButton.hideButton();
    }

    _onStartGame() {
        this._playButton.hideButton();
        this._replayButton.hideButton();
        this.initGame("new");
    }
    _onReplayGame() {
        this.initGame("replay");
        this._replayButton.hideButton();
        this._playButton.hideButton();
    }

    _initValueCard(numberCard, mulNumber) {
        let cardValue = [];
        for (let i = 1; i <= numberCard; i++) {
            for (let j = 1; j <= mulNumber; j++) {
                cardValue.push(i);
            }
        }
        return cardValue;
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
            this._cardRemain += -2;
            this._updateScore(1000)
            this._openedCard.hideCard();
            card.hideCard();
        } else {
            this._updateScore(-500);
            card.flipClose();
            this._openedCard.flipClose();
        }
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
            this._canClick = false;
            let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
            tl.delay(1)
                .add(() => {
                    confirm("You Lose Game")
                    this._playButton.showButton();
                    this._replayButton.showButton();
                });
            return;
        }
        if (this._cardRemain <= 0) {
            this._canClick = false;
            let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
            tl.delay(1.2)
                .add(() => {
                    confirm("You Win Game")
                    this._playButton.showButton();
                });
            return;
        }
        this._reset();
    }        

    _reset() {
        let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        tl.delay(1)
        tl.add(() => {
            this._canClick = true;
            this._openedCard = null;
        })
    }

}



