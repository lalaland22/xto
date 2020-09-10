const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});
let name1; 
let name2;
rl.question('Name:',(answer)=> {
    name1 = answer;
    console.log(name1)
    rl.close()
})

rl.question('No:',(answer2)=> {
    name2 = answer2;
    console.log(name2)
    rl.pause()
})