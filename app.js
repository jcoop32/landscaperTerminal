const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Hello ${username}!`);

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

*/
function ranNumHours(MAX_NUM, MIN_NUM) {
  return Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);
}
let userBank = 0;
let exitLoop = false;

function cutGrassTeeth() {
  console.log('You are now cutting grass with your teeth');
  userBank++;
  console.log(
    `You spent ${ranNumHours(48,15)} hours cutting a customers lawn and made $1!`
  );
  console.log(`You have $${userBank} in your bank.`);
}
function cutGrass(){
  let userCut = prompt(`Press 'c' to cut grass.`);
  if (userCut === 'c'){
    cutGrassTeeth();
  } else {
    console.log(`You stopped cutting grass. You have $${userBank} in the bank.`);
    exitLoop = true;
  }
}

while (!exitLoop){
  cutGrass();
}
