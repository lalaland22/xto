const readline = require("readline");
const { create } = require("domain");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Do you have an account?(Y/N)', (answer) => {
    answer.toUpperCase
    if (answer == 'Y'){
        rl.question('What would you like to do?(Edit/Delete)', (answer) => {
        answer.toLowerCase
        switch(answer){
            case 'edit':
            editPhonebook()
            break;
            case 'delete':    
            deleteClients()
            break;
            default: 
            console.log('Invalid input')
           }       
        });
    }
    else if{
        rl.question('Do you want to create an account?(Y/N)', (answer) =>{
            

        });   
    }
    

});
function createQueue() {
    const clients= []
    return{
       addClients(item){
           queue.unshift(item)
       },
       deleteclients(x){
           return clients.pop(x)
       },
       view(){
           return clients
       },
       isEmpty (){
        return queue.length == 0
        
       } 
    }
}