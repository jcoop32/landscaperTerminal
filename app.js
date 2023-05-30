/*
Game Descirption: 
You are starting a landscaping business, but all you have are your teeth.
Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.

-At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.

-Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.

-At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.

-Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want

-At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.

-Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.

-At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.

-Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.

-You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they’ve won.


Game Flow:
if users bank balance is below $5 -> run cutGrassTeeth
if the users bank is above $5 then ask if they want to upgrade to scissors 
  if yes -> run cutGrassScissors()
  if no -> keep running cutGrassTeeth()
if users bank is above $25 then ask if they want to upgrade to an old-timey push mower
  if yes -> run cutGrassPushMower()
  if no -> run current cutGrass function


*/

const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Hello ${username}!`);

const userInfo = {
  name: username,
  cash: 0,
  hasTeeth: true,
  hasScissors: false,
  hasPushMower: false,
  hasPowerMower: false,
  hasTeam: false,
  currentTool: cutGrassTeeth,
};

//generates random hour number for message
function ranNumHours(MAX_NUM, MIN_NUM) {
  return Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);
}
//starting bank balance for user
// let userInfo.cash = 0;
let exitLoop = false;

//function for cutting grass with teeth aka starting round
function cutGrassTeeth() {
  console.log('You cut a lawn with your teeth');
  userInfo.cash = userInfo.cash + 1;
  console.log(
    `You spent ${ranNumHours(70,35)} hours cutting a customers lawn and made $1!`
  );
  console.log(`You have $${userInfo.cash} in your bank.`);
}

function cutGrassScissors(){
  userInfo.hasScissors = true;
  console.log('You cut a lawn with a pair of Scissors');
  userInfo.cash = userInfo.cash + 5;
  console.log(
    `You spent ${ranNumHours(35,17)} hours cutting a customers lawn and made $5!`
  );
  console.log(`You have $${userInfo.cash} in your bank.`);
}

function cutGrassPushMower(){
  userInfo.hasPushMower = true;
  console.log('You cut a lawn with a push mower.');
  userInfo.cash = userInfo.cash + 50;
  console.log(
    `You spent ${ranNumHours(17,7)} hours cutting a customers lawn and made $50!`
  );
  console.log(`You have $${userInfo.cash} in your bank.`);
}



// function cutGrass(){
//   let userCut = prompt(`Press 'c' to cut grass.`);
//   if (userCut === 'c'){
//     cutGrassTeeth();
//   } else if(){

//   } else {
//     console.log(`You stopped cutting grass. You have $${userInfo.cash} in the bank.`);
//     exitLoop = true;
//   }
// }

// function cutGrass(){
//   let userCut = prompt(`Press 'c' to cut grass.`);
//   if (userCut === 'c'){
//     if (userInfo.cash < 5){
//       cutGrassTeeth();
//     } else if (userInfo.cash === 5){
//       let choice = prompt(`You have made enough $ to buy a pair of scissors. This will allow you make $5 per lawn. Would you like to buy them? (y/n): `);
//       if (choice === 'y'){
//         userInfo.cash = userInfo.cash - 5;
//         console.log(`You bought a pair of scissors for $5! You now have $${userInfo.cash} left.`);
//         cutGrassScissors();
//       } else if (choice === 'n'){
//         cutGrass();
//       }
//     }
//   } else if (userCut === 'q'){
//     exitLoop = true;
//   }
// }

function cutGrass(){
  let choice = prompt(`Press 'c' to cut lawn.`);
  if (choice === 'c'){
    if (userInfo.cash < 5 && userInfo.hasTeeth){
      userInfo.currentTool();
    } else if (userInfo.cash > 4 && !userInfo.hasScissors){
      let newTool = prompt(`Do you want to upgrade to a pair of Scissors for $5? (y/n): `);
      if (newTool === 'y'){
        userInfo.cash = userInfo.cash - 5;
        console.log(`You bought a pair of scissors for $5! You now have $${userInfo.cash} left.`)
        userInfo.hasScissors = true;
        // userInfo.hasTeeth = false;
        userInfo.currentTool = cutGrassScissors();
      } else if (newTool === 'n'){
        //userInfo.hasTeeth = true;
        userInfo.currentTool();
      }
    } else if (userInfo.cash > 4 && userInfo.cash < 30 && userInfo.hasScissors){
      userInfo.currentTool = cutGrassScissors();
    } else if (userInfo.cash > 25 && !userInfo.hasPushMower){
      let newTool = prompt(`Do you want to upgrade to a push mower for $25? (y/n): `);
      if (newTool === 'y'){
        userInfo.cash = userInfo.cash - 25;
        console.log(`You bought a old-timey push mower for $25! You now have $${userInfo.cash} left.`);
        userInfo.hasPushMower = true;
        //userInfo.hasScissors = true;
        // userInfo.hasTeeth = false;
        userInfo.currentTool = cutGrassPushMower();
      } else if (newTool === 'n'){
        //userInfo.hasTeeth = true;
        userInfo.currentTool();
      }
    } else if (userInfo.cash > 25 && userInfo.hasPushMower){
      userInfo.currentTool = cutGrassPushMower();
    }
  } else if (choice === 'q'){
    exitLoop = true;
  }
}

while (!exitLoop){
  cutGrass();
}
