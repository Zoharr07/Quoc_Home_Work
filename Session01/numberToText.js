let numberBase = ["khong", "mot", "hai", "ba", "bon", "nam", "sau", "bay", "tam", "chin"];
let numberDec = ["linh", "muoi", "tram", "ngan"];
let numberInput = 123456;

function InvertNumber(number){
    
    let result = [];

    if(number < 0 && number > 1000000) return "wrong input";
    if(number > 10000){
        let upValue = Math.floor(number / 10000);
        let downValue = number - upValue * 10000;
        InvertNum(downValue);
        result.push("van");
        InvertNum(upValue);
    }
    else InvertNum(downValue);

    function InvertNum(_number){
        let numString = _number.toString();
        let leng = numString.length;

        for (let i = 0; i < leng; i++){
            let num = numString[leng - 1 - i];
            
            if(i > 1 && i <= 3) result.push(numberDec[i]);
            else if( i == 1 && num != '0') result.push("muoi");
            if(i == '0') {
                if(num == '0'){
                    result.push("");
                }
                else if(num == '5') result.push("lam");
                else result.push(numberBase[num]);
            }
            else if(i == '1'){
                if(num == '0') result.push("linh");
                else if(_number > 20) result.push(numberBase[num]);
            }
            else result.push(numberBase[num]);
        }
    }
    
    let numStr = "";
    for(let i = result.length - 1; i >= 0; i--) numStr += result[i] + " ";
    console.log(numStr);
}
InvertNumber(123456);