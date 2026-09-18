// input coming user enter with number store number
// by prompt we take input user number
//run all number user from loop start 1

//then condtion with multiple by 3 then print fizz 
//by 5 then Bizz
//by both 3 and 5 then FizzBuzz


let number = parseInt(prompt(`Enter the number multiple by 3 and 5 `));
console.log(number);

//here to get render
const targetElement = document.getElementById("mul");

// Clean out any old text before starting the loop
targetElement.innerText = "";

for (let i = 1; i <= number; i++) {
    // console.log(i);
    // debugger;
    //check full flow from here from debug freeze window do next and flow happen     

    // 1. Create a variable to hold the output text for this specific turn
    let result = "";

    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
    }
    else if (i % 3 === 0) {
        result = "Fizz";
    }
    else if (i % 5 === 0) {
        result = "Buzz";
    }
    else {
        result = i;
    }

    // 2. Append it directly to the webpage inside the loop!
    // We add a space " " so the values don't smash together
    targetElement.innerText += result + ", ";
}

//wrong i in loop so result empty and store each 
// let result = i;
// document.getElementById("mul").innerText=i;

//what wrong here is last condtion rather must define in first place
//because it chaining js from top to end where here it satisfy here first if condtion i%3==0  mean 3*5=15 then index print fizz instead fizzBuz 
//where last will skipped
//above structure if else condtion construct with priority 
// for(let i =1; i<=number; i++){
//     // console.log(i);
//     if(i%3===0){
//         console.log("Fizz");
//     }
//     else if(i%5===0){
//         console.log("Buzz");
//     }
//     else if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     }
//     else{
//         console.log(i);
//     }
// }