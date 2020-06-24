function add(param1, param2) {
    return  param1+param2
}
function centuryFromYear(year) {
    if(year%100==0)
    {
        return year/100
    }else{
        return Math.floor(year/100+1)
    }
}
function checkPalindrome(inputString) {
    for(let i=0;i<Math.floor(inputString.length/2);i++)
    {
        j=inputString.length-1-i;
        if(inputString[i] != inputString[j]){
            return false;
        }
    }
    return true;
}

function adjacentElementsProduct(inputArray) {
    let temp=inputArray[0]*inputArray[1]
    for(let i=0;i<inputArray.length;i++){
            if(inputArray[i]*inputArray[i+1]>temp){
                temp=inputArray[i]*inputArray[i+1];
            }
        }
    return temp;
}

