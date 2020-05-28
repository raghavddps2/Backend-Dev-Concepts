const readline =    require('readline')
const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);

let answer = num1+num2;

readInput.question(`What is ${num1} and ${num2} ?\n`,(userInput)=>{
    userInput = userInput.trim();
    if(userInput == answer){
        readInput.close();
    }
    else{
        readInput.setPrompt('Incorrect response, please try again\n');
        readInput.prompt();

        //This input, triggers a loop.
        readInput.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                readInput.close();
            }
            else{
                readInput.setPrompt(`Your reponse of ${userInput} is Incorrect, please try again\n`);
                readInput.prompt();
            }
        });
    }
});


readInput.on('close',()=>{
    console.log("Your answer was correct");
})


