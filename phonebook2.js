const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Name:\n', (username) => {
  rl.close();
});
rl.question('Number:\n', (username) => {
    rl.close();
  });
/* rl.question('What would you like to do?\n Create \n Edit\n View \n Delete\n', (answer) => {
    answer.toLowerCase
    switch(answer){
        case 'create':
            rl.question(`What's your name?\n`, (name) => {
                rl.close()
              })   
            createAccount(username,phoneNumber)
            break;
        case 'edit':
            editAccount()
            break;
        case 'view':
            viewAccount()
            break;
        case 'delete':
            deleteAccount()
            break;
        default: 
            console.log('Invalid input')
    }
});

function PhoneBook(){
        createAccount(username,phoneNumber)






} */