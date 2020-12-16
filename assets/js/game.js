/* variable to store robot's name */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

/* function to declare the start of the fight */
var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Do you wish to FIGHT or SKIP the battle?");

// if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // player attack
    enemyHealth = enemyHealth - playerAttack;
    console.log (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " still remaining.");

    // check enemy health
    if (enemyHealth <= 0) {
        window.alert (enemyName + " has died.");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // enemy attack
    playerHealth = playerHealth - enemyAttack;
    console.log (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " still remaining.");

    // check player health
    if (playerHealth <= 0) {
        window.alert (playerName + " has died.");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player chooses to skip
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes, leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }
    // if no, ask question to run fight()
    else {
        fight();
    }
}   else {
    window.alert("You need to choose a valid option. Try again!")
}

};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}