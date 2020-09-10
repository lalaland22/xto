const { rawListeners } = require('process')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.on('line',(nameOne)=>{
    console.log(nameOne)
    readline.close()
})
console.log('What is your name?')
function givenames(){
    console.log('This is your new name.')
}

