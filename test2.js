const readline= require('readline')
const { rawListeners, stdin, stdout } = require('process')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function createAccount(){
rl.question('Whats your name?:\n', (realName)=>{
    rl.question('No:\n',(pnumber)=>{}
    )
rl.on('line',()=>{
        rl.close()
    })
});
} 
function outputA(){
    console.log(client)
}
console.log('Input your info:')
const client = [createAccount()]
setTimeout(outputA, 10000)