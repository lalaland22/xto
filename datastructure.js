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
            deletePhonebook()
            break;
            default: 
            console.log('Invalid input')
           }       
        });
    }
    else {
        rl.question('Do you want to create an account?(Y/N)', (answer) =>{
            

        });   
    }
    

});
/* 
CRUD
Create 
Read 
Update 
Delete

Phone numbers of individuals in the example formart
{
    name: 'Makavura',
    number: '0705347608'
}

user can create a contact entry
user can read all contacts
user can update a contact entry
user can delete a contact entry

in a data structure
*/

function createPhoneBookEntry() {
    let contacts = [];
    create(){
        
    }


}

function proceedToNext() {
    return 'Thank you for visiting us. See you next time.'
}