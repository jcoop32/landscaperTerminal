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
and continue for each upgrade once cash has hit certain balance.


*/

const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Hello ${username}, Welcome to LandScaper!\n`);
console.log(`*********************************************`)
console.log(`You have decided to start a landscaping business in your city.\n`);
console.log(`The only problem is that you dont have any money, so to get started\n`);
console.log(`you must use the tools you were born with, your teeth...\n`);
console.log(`Since this is very weird you have decided to give customers an attractive quote for $1 a lawn!\n`);
console.log(`As you upgrade your tools, prices per lawn will increase due to higher efficiency.\n`);
console.log(`Are You ready to get cutting!?\n`)
console.log(`*********************************************`)

const win = 10000
//object for user
const userInfo = {
  name: username,
  cash: 0,
  lawnCount: 0,
  grossRevenue: 0,
  highestTool: 'Teeth',
  hasTeeth: true,
  hasScissors: false,
  hasPushMower: false,
  hasPowerMower: false,
  hasTeam: false,
  hasRobots: false,
  currentTool: cutGrassTeeth,
};

//generates random hour number for message
function ranNumHours(MAX_NUM, MIN_NUM) {
  return Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);
}

//if true -> breaks loop
let exitLoop = false;
/**************************************************************************************/

//function for user to cut grass and make money
function cutGrass(){
  userInfo.currentTool();
}

//functions for each tool 
function cutGrassTeeth() {
  console.log('You cut a lawn with your teeth');
  userInfo.cash = userInfo.cash + 1;
  userInfo.grossRevenue = userInfo.grossRevenue + 1;
  console.log(
    `You spent ${ranNumHours(70,35)} hours cutting a customers lawn and made $1!`
  );
  userInfo.lawnCount = userInfo.lawnCount + 1;
}
function cutGrassScissors(){
  userInfo.hasScissors = true;
  console.log('You cut a lawn with a pair of Scissors');
  userInfo.cash = userInfo.cash + 5;
  userInfo.grossRevenue = userInfo.grossRevenue + 5;
  console.log(
    `You spent ${ranNumHours(35,17)} hours cutting a customers lawn and made $5!`
  );
  userInfo.lawnCount = userInfo.lawnCount + 1;
}
function cutGrassPushMower(){
  userInfo.hasPushMower = true;
  console.log('You cut a lawn with a push mower.');
  userInfo.cash = userInfo.cash + 50;
  userInfo.grossRevenue = userInfo.grossRevenue + 50;
  console.log(
    `You spent ${ranNumHours(17,7)} hours cutting a customers lawn and made $50!`
  );
  userInfo.lawnCount = userInfo.lawnCount + 1;
}
function cutGrassPowerMower(){
  userInfo.hasPowerMower = true;
  console.log('You cut a lawn with a power mower.');
  userInfo.cash = userInfo.cash + 100;
  userInfo.grossRevenue = userInfo.grossRevenue + 100;
  console.log(
    `You spent ${ranNumHours(7,2)} hours cutting a customers lawn and made $100!`
  );
  userInfo.lawnCount = userInfo.lawnCount + 1;
}
function cutGrassTeam(){
  userInfo.hasTeam = true;
  console.log('Your team cut a lawn.');
  userInfo.cash = userInfo.cash + 250;
  userInfo.grossRevenue = userInfo.grossRevenue + 250;
  console.log(
    `Your team spent ${ranNumHours(3,1)} hour(s) cutting a customers lawn and made $250!`
  );
  userInfo.lawnCount = userInfo.lawnCount + 1;
}
function cutGrassRobots(){
  userInfo.hasRobots = true;
  console.log('Your Robots cut 2 lawns.');
  userInfo.cash = userInfo.cash + 500;
  userInfo.grossRevenue = userInfo.grossRevenue + 500;
  console.log(
    `Your robots spent ${ranNumHours(55,25)} minutes cutting two of your customers lawns and made $500!`
  );
  userInfo.lawnCount = userInfo.lawnCount + 2;
}
/**************************************************************************************/

//function to give user option to upgrade tool
function upgradeTool(){
  toolList();
  if (userInfo.cash < 5){
    console.log(`\nYou do not have enough money to upgrade tools. Keep Cutting! \n`)
  } else if (userInfo.cash > 5 && !userInfo.hasScissors){
    upgradeToScissors();
  } else if (userInfo.cash > 25 && !userInfo.hasPushMower){
    upgradeToPushMower();
  } else if (userInfo.cash > 250 && !userInfo.hasPowerMower){
    upgradeToPowerMower();
  } else if (userInfo.cash > 500 && !userInfo.hasTeam){
    upgradeToTeam();
  } else if (userInfo.cash > 5000 && !userInfo.hasRobots){
    upgradeToRobots();
  } else {
    console.log(`\nNo upgrades at this time.\n`);
  }
}

//functions for upgrading tools
function upgradeToScissors(){
  console.log(`\nYou can afford a pair of scissors for $5.\n`);
    let choice = prompt(`Would you like to buy a pair of Scissors for $5? (y/n): `);
    if (choice === 'y'){
      userInfo.hasScissors = true;
      userInfo.cash = userInfo.cash - 5;
      console.log(`Balance After Upgrade: $${userInfo.cash}.`);
      userInfo.currentTool = cutGrassScissors;
      userInfo.highestTool = 'Scissors';
    }
}
function upgradeToPushMower(){
  console.log(`\nYou can afford an old-timey push mower for $25.\n`);
    let choice = prompt(`Would you like to buy the push mower for $25? (y/n): `);
    if (choice === 'y'){
      userInfo.hasPushMower = true;
      userInfo.cash = userInfo.cash - 25;
      console.log(`Balance After Upgrade: $${userInfo.cash}.`);
      userInfo.currentTool = cutGrassPushMower;
      userInfo.highestTool = 'Push Mower';
    }
}
function upgradeToPowerMower(){
  console.log(`\nYou can afford a brand new Battery Powered mower for $250.\n`);
    let choice = prompt(`Would you like to buy the Battery Powered mower for $250? (y/n): `);
    if (choice === 'y'){
      userInfo.hasPowerMower = true;
      userInfo.cash = userInfo.cash - 250;
      console.log(`Balance After Upgrade: $${userInfo.cash}.`);
      userInfo.currentTool = cutGrassPowerMower;
      userInfo.highestTool = 'Power Mower';
    }
}
function upgradeToTeam(){
  console.log(`\nYou can afford to hire a group of student for $500.\n`);
    let choice = prompt(`Would you like to hire the students for $500? (y/n): `);
    if (choice === 'y'){
      userInfo.hasTeam = true;
      userInfo.cash = userInfo.cash - 500;
      console.log(`Balance After Upgrade: $${userInfo.cash}.`);
      userInfo.currentTool = cutGrassTeam;
      userInfo.highestTool = 'Team of students';
    }
}
function upgradeToRobots(){
  console.log(`\nYou can afford to buy 5 Highly Efficient Robots for $5000.\n`);
    let choice = prompt(`Would you like to hire the students for $5000? (y/n): `);
    if (choice === 'y'){
      userInfo.hasTeam = true;
      userInfo.cash = userInfo.cash - 5000;
      console.log(`Balance After Upgrade: $${userInfo.cash}.`);
      userInfo.currentTool = cutGrassRobots;
      userInfo.highestTool = 'Robots';
    }
}
//display tools avaliable to buy
function toolList(){
  console.log(`Tool Upgrade List:\n`);
  console.log(`1. Scissors - $5\n`);
  console.log(`2. Push Mower - $25\n`);
  console.log(`3. Power Mower - $250\n`);
  console.log(`4. Team of Students - $500\n`);
  console.log(`5. Robots - $5000\n`);
  console.log(`****************************`);
  console.log(`Current balance: $${userInfo.cash}.`);
  console.log(`****************************`);

}

/**************************************************************************************/

//check current balance
function checkBalance(){
  console.log(`\nCurrent Balance is $${userInfo.cash}.\n`);
}

//main menu 
function menu(){
  let menuChoice = prompt(`Main Menu: (c)ut grass, (u)pgrade tool, check (b)alance, (r)eset, e(x)it: `);
  if (menuChoice === 'c'){
    cutGrass();
  } else if (menuChoice === 'u'){
    upgradeTool();
  } else if (menuChoice === 'b'){
    checkBalance();
  } else if (menuChoice === 'r'){
    resetGame();
  } else if (menuChoice === 'x'){
    console.log(`User has quit.`);
    displayStats();
    exitLoop = true;
  } else {
    console.log(`Command not found. `);
  }
  
}
/**************************************************************************************/

//user stats for game
function displayStats(){
  console.log(`\n${username}, Nice job! Here are some stats from your game:\n`);
  console.log(`\nEnding balance: $${userInfo.cash}\n`);
  console.log(`\nGross Revenue: $${userInfo.grossRevenue}\n`);
  console.log(`\nTotal Lawns cut: ${userInfo.lawnCount}\n`);
  console.log(`\nHighest Upgraded Tool: ${userInfo.highestTool}\n`);
}

function resetGame(){
  let gameReset = prompt(`Are you sure you want to reset the game? (y/n): `);
  if (gameReset === 'y'){
    userInfo.cash = 0,
    userInfo.lawnCount = 0,
    userInfo.grossRevenue = 0,
    userInfo.highestTool = 'Teeth'
    userInfo.hasTeeth = true
    userInfo.hasScissors = false
    userInfo.hasPushMower = false
    userInfo.hasPowerMower = false
    userInfo.hasTeam = false
    userInfo.hasRobots = false
    userInfo.currentTool = cutGrassTeeth
    console.log(`\nGame Reset.\n`)
  } else if (gameReset === 'n'){
    console.log(`\nReset cancelled.\n`);
  }
}


//loop for program
while (!exitLoop){
  menu();
  if (userInfo.cash > win){
    console.log(`\nCongratulations You have made $10,000 and won!\n`);
    displayStats();
    break;
  }
}
