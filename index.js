const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
var money = 100
async function main(){

    var name = await ask("What is your name? ");
    console.log(`Hello, ${name}!`);

    var action = '';
    while(action !== 'exit'){
        action = await ask("What are you going to do? (work, shop): ");
        // console.log(action);
        if(action == "work"){
            money = money + 100
        }
        if(action =="shop") {
            if(money < 50){
                console.log('Then you cant shop!');
            } else {
                money=money-50;
                console.log('you have a new car!')
            }
        }

        console.log(`you have ${money} money`)
    }
   

    rl.close();
}

main();