//function declaration
function add7(number) {
    let total = number + 7;
    console.log(total)
}
add7(7);   //call function

function multiplication(mulA, mulB) {
    let total = mulA * mulB;
    //  alert(total);
    console.log(total);
}
multiplication(3, 2)

function capitalize(text) {
    //guard clause 
    if (!text || typeof text !== "string") return ""

    // FLOW STEP 1: Take the very first letter (index 0) and force it to UPPERCASE
    const firstLetter = text.charAt(0).toUpperCase();

    // FLOW STEP 2: Take the rest of the string (from index 1 to the end) and force it to lowercase
    const restLetter = text.slice(1).toLowerCase();
    console.log(firstLetter + restLetter)

    //  let combine = firstLetter+restLetter;
    // alert(combine)

    //this will give type error with null inside function using this whle need to type in html
    // document.getElementById("funct").innerText=combine
    // FLOW STEP 3: Glue (concatenate) the two pieces together and return the result
    return firstLetter + restLetter;

}

let formatedResult1 = capitalize("abcd") //should return "Abcd"
let formatedResult2 = capitalize("ABCD") //should return "Abcd"
let formatedResult3 = capitalize("aBcD") //should return "Abcd"
let formatedResult4 = capitalize("aBcD") //should return "Abcd"

//here all display 4 time in fraction of second with no eye catch but .innerText wipe out other
// document.getElementById("funct").innerText=formatedResult1;
// document.getElementById("funct").innerText=formatedResult2;
// document.getElementById("funct").innerText=formatedResult3;
// document.getElementById("funct").innerText=formatedResult4;

// Using += appends the new text to the screen instead of wiping it out
document.getElementById("funct").innerText += formatedResult1 + "   ";
document.getElementById("funct").innerText += formatedResult2 + " ";
document.getElementById("funct").innerText += formatedResult3 + " ";
document.getElementById("funct").innerText += formatedResult4 + " ";

//final production env clean code

let finalDisplay = `${formatedResult1}, ${formatedResult1}, ${formatedResult1}, ${formatedResult1}`;
document.getElementById("funct").innerText=finalDisplay;

// 4 question to fecht last leeter from string
function lastLetter(laststr){
    if(!laststr || typeof laststr !== "string") return ""
    let len= laststr.length;
    let lastch = len -1;

    //rest no needed here to grab
    console.log(laststr[lastch]);

 //   let target="";
    // let lastfinal =charAt(lastch);
    // console.log(lastfinal);
    // console.log(lastch);  // last index print 3
    //  for(let i= 0;i<=lastch;i++){
        
    //     if(target===lastch){
    //         console.log(lastch[i]);
    //     }
    //  }
}
lastLetter("abcd") //should return "d"