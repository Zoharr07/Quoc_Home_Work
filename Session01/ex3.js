
let hx = [0, 0, 1, -1];
let hy = [1, -1, 0, 0];

let startPos = [0, 0];
let endPos = [];

let board = new Array();
    board[0] = [0, 0, 0, 0, 0];
    board[1] = [1, 1, 1, 1, 0];
    board[2] = [1, 1, 1, 1, 1];

function SetEndPos(_board){
     let length = _board.length;
     for(let i = 0; i <length; i++){
         if(_board[i][_board[i].length - 1] === 0){
             endPos.push([i, _board[i].length - 1]);
         }
     }
     console.log(endPos);
}
SetEndPos(board);

let checkBoard = new Array();


