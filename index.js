// console.log("hello world")

// let temp=document.getElementById("demo")
// temp.addEventListener('click',(e)=>{
//     document.getElementById("heading1").innerText="Doi r ne`";
// })
let string="haianh"
console.log(string.length)
function checkPalindrome(inputString) {
    for(let i=0;i<Math.floor(inputString.length/2);i++)
    {
        for(let j=(inputString.length-1);j<Math.floor(inputString.length/2);j--){
            if(inputString[i] != inputString[j])
            {
                return false;
            }
        }
    }
    return true;
}
console.log(checkPalindrome(string))
console.log(string.length/2)
console.log(string[1])
console.log(string[4]!=string[1])
