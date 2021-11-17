// exercise 1
function CaculatteFactorial(number){
    console.log("You input: " + number)
    let str = number;
    let result = 1;
    let length = str.length;

    for(let i = length - 1; i >=0; i--){
        let char = str[i];
        if(isNaN(char * 1)){
        console.log(number +" isn't a numberic");
        return null;
        }
    }
    if(number < 1){
        console.log(number +" is negative number");
        return null;
    }
    else if((number % 1) != 0){
        console.log(number +" is decimal number");
        return null;
    }
    else{
        for(let i = 1; i <= number; i++){
            result *= i;
        }
        console.log("Factorial of " + number + " is: " + result);
    }
}
CaculatteFactorial("5");
console.log("\n");

// exercise 2
function GetRandomInterger(minNumber, maxNumber){
    console.log("You input: " + minNumber + ", " + maxNumber);
    let minNum = minNumber;
    let maxNum = maxNumber;

    if(minNum > maxNum){
        let temp = minNum;
        minNum = maxNum;
        maxNum = temp;
    }
    console.log("min number: " + minNum + ", max number: " + maxNum);

    let rand = Math.floor(Math.random() * (maxNum - minNum +1) + minNum);
    console.log("Random Interger: " + rand);
}
GetRandomInterger(324.5, 67.8)
console.log("\n");

// exercise 3
function GetValueRandomArray(){
    let arr = [30, 2, 3, 4, 54, 12, 7, 61, 9, 120, 8]
    let rand = Math.floor(Math.random() * arr.length);
    
    console.log("Array: " + arr);
    console.log("Length array: " + arr.length + ", rand posittion: " + rand + ", Value: " + arr[rand]);
}
GetValueRandomArray();
console.log("\n");

// exercise 4
function FindMissingArray(){
    let arr1 = [7, 2, 5, 3, 5, 3];
    let arr2 = [7, 2, 5, 6, 4, 3, 5, 3];

    console.log("Array 1: " + arr1);
    console.log("Array 2: " + arr2);

    function Lookup(inputArr1, inputArr2){
        let result = [];
        let length1 = inputArr1.length;
        let length2 = inputArr2.length;
        for(let i = 0; i < length1; i++){
            let count = 0;
            for(let j = 0; j < length2; j++){
                if( inputArr1[i] === inputArr2[j]){
                    count += 1;
                }
            }
            if(count === 0){
                result.push(inputArr1[i]);
            }
        }
        if(result.length == 0){
            console.log("No missing element of array 2 in array 1");
        }
        else console.log("Missing element: " + result);
    }
    Lookup(arr2, arr1);
}
FindMissingArray();