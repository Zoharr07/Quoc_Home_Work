
// exercise 1
function FormatMoneyValue(number){
    console.log("You input: " + number);
    let _interger = Math.floor(number);
    let _decimal = number.toString().split('.')[1];
    let result = "";

    function addComma(_num){
        let numStr = _num.toString();
        let length = numStr.length;
        let count = 1;
        
        for( let i = length - 1; i >= 0; i--){
            result += numStr[i];
            if(count >= 3){
                count = 0;
                if(i != 0) {
                    result += ",";
                }
            }
            count++;
        }
    }
    addComma(_interger)

    let finalStr = "";
    for(let i = result.length - 1; i >= 0; i--) finalStr += result[i];
    finalStr += "." + _decimal;
    console.log("The result: " + finalStr);
}
FormatMoneyValue(123456789123.32555);
console.log("\n");

// exercise 2
function FormatShorten(number){
    let numDic = ["", "K", "M", "B"]
    let numLog = [0, 3, 6, 9]

    console.log("You input: " + number);
    let numStr = Math.floor(number).toString();
    let lengthLog = numStr.length;
    let lengthStr = numStr.length;
    
    for(let i = lengthLog; i >= 0; i--){
        if(lengthStr - 1 >= numLog[i]) {
            console.log("Result is: " + number / Math.pow(1000, i) + " " + numDic[i]);
            break;
        }
    }
}
FormatShorten(12345);
console.log("\n");

// exercise 3
function CountText(inputText){
    //var str = "oneTwoTreeFour";
    console.log("You input: " + inputText)
    let str = inputText;
    let count = 0;
    let length = str.length;

    for(let i = length - 1; i >=0; i--){
        let char = str[i];
        if(!isNaN(char * 1)){
            //console.log(char +" is a numberic")
        }
        else {
            if (char == char.toUpperCase()) {
                //console.log(char + " is upcase");
                count++;
            }
            if (char == char.toLowerCase()){
                //console.log(char + " is lowcase");
            }
        }
    }
    console.log("Number words in string: " + count);
}
CountText("an34rT78wewYnnwa");
console.log("\n");

// exercise 4
function GetFileExtention(filename){
    console.log("You input FileName is: " + filename);
    //filename must have extenttions
    let nameStr = "";
    
    if(filename.toString().split('.')[1] != null){
        nameStr = filename.toString().split('.')[1];
    }
    else nameStr = "File nott have Extentions"
    filename.toString().split('.')[1];
    console.log("File Extention is: " +nameStr);
}
GetFileExtention("test.abc");

