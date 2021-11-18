class point {    
    constructor(x, y){
        this.x = x;
        this.y = y;
    }    
}

let board = new Array();
    board[0] = [ 0, 0, 0, 0, 0];
    board[1] = [ 1, 1, 1, 1, 0];
    board[2] = [ 1, 1, 1, 1, 1];

let maxY = board.length - 1;
let maxX = board[maxY].length - 1;

let startPoint = new point(0, 0);
var currPoint = new point(0, 0);

let part = [];

console.log(board);
console.log(maxX);
console.log(maxY);

currPoint = startPoint;
if(board[currPoint.x][currPoint.y] === 0){
    console.log(startPoint)
    part.push(new point(startPoint.x, startPoint.y))
}
function FindPath(){
    for(let i = 0; i <= maxX; i++){
        if( currPoint.x < 0 || currPoint.x >= maxX || currPoint.y < 0 || currPoint.y > maxY){
            console.log("End find path" + currPoint.x + " " + currPoint.y);
        }        
        else {
            for(let j = 0; j <= maxY; j++){
                console.log(i + " " + j)
                if(board[j][i+1] === 0){
                    
                    SetCurrentPoint(new point(i+ 1, j));
                    break;
                }
            }
        }
          
    }
}
FindPath();
console.log(part)

function SetCurrentPoint(point){

    currPoint.x = point.x;
    currPoint.y = point.y;
    console.log("update point" + currPoint.x + " " + currPoint.y)
    part.push(point);
}

function Export(){
    
}

