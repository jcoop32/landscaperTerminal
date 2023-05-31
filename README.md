# Landscaper

### Process of creating terminal game 

- Creating Game Description
- Creating Game Flow
- Create Game Logic  

###Game Description:
You are starting a landscaping business, but all you have are your teeth.
Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
1. At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
2. Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
3. At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.

###Game Flow:
The way I wanted the game to work in the beginning is much different from what I have now. To start, I want to get the users name and then present them with a introduction to the game. From there, the user is now shown a menu, where they are presented with 5 different options:
1. Cut Grass -> by entering 'c' into the console they will execute the cutGrass() function.
2. Upgrade Tool -> by entering 'u' into the console, the user can check and see if they are eligible to upgrade their tool.
3. Check Balance -> by entering 'b' into the console, the user can check their current balance.
4. Reset -> by entering 'r' the user will be asked if they would like to reset their current game.
5. Exit -> by entering 'x' the user can end and exit the game.
 
 
**Example of a Problem and Solution**
Problem: When I first started building this game, I didnt have a main menu where the user can interact with different options. The game would simply start and ask if they would like to cut grass. I was having some problems with this and found myself in a never ending loop. Here is an example of what was happening from my cutGrass() function:
```javascript
else if (userInfo.cash > 4 && userInfo.cash < 30 && userInfo.hasScissors){
      userInfo.currentTool = cutGrassScissors();
    } else if (userInfo.cash > 25 && !userInfo.hasPushMower){
    } else if (userInfo.cash > 0 && !userInfo.hasPushMower){
      let newTool = prompt(`Do you want to upgrade to a push mower for $25? (y/n): `);
      if (newTool === 'y'){
        userInfo.cash = userInfo.cash - 25;
        console.log(`You bought a old-timey push mower for $25! You now have $${userInfo.cash} left.`);
        userInfo.hasPushMower = true;
        //userInfo.hasScissors = true;
        // userInfo.hasScissors = false;
        // userInfo.hasTeeth = false;
        userInfo.currentTool = cutGrassPushMower();
      }
    }
```
Whenever the user was over the cash amount the program would just ask if you wanted to cut and would never call the correct function. 
Solution: I fixed this by recreating the whole cutGrass() function starting from top to bottom. I wanted it to be very simple and easy to read. Here's what a snippet of what I did:
```javacript
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
```
I first created a new object to hold different properties of the users information. You can see that the default tool is the cutGrassTeeth(), which is shown below: 
```javascript
function cutGrassTeeth() {
  console.log('You cut a lawn with your teeth');
  userInfo.cash = userInfo.cash + 1;
  userInfo.grossRevenue = userInfo.grossRevenue + 1;
  console.log(
    `You spent ${ranNumHours(70,35)} hours cutting a customers lawn and made $1!`
  );
  userInfo.lawnCount = userInfo.lawnCount + 1;
}
```
I would then call this function in the main cutGrass() function:
```javascript
function cutGrass(){
  userInfo.currentTool();
}
```
This now runs the cutGrassTeeth() function and increments some of the properties. Once the userInfo.cash is greater than 5 it now is ready for an upgrade, which a user can check by entering 'u' in the menu. I then created and added the other tools that ae upgradable for the user, with the same process. This saved me a good amount of space in the program and made it much easier for me to read.






