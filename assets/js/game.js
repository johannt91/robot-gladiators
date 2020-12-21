/* variable to store robot's name */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;


/* function to declare the start of the fight */
var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("Do you wish to FIGHT or SKIP the battle?");
    
    //if player picks "skip" confirm and stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    
    // if player chooses to fight, then fight
        // player attack
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " still remaining.");
    
        // check enemy health
        if (enemyHealth <= 0) {
            window.alert (enemyName + " has died.");
            playerMoney = playerMoney + 20;
            break;
            } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // enemy attack
        playerHealth = playerHealth - enemyAttack;
        console.log (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " still remaining.");
    
        // check player health
        if (playerHealth <= 0) {
            window.alert (playerName + " has died.");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }    
};  


    for(var i = 0; i < enemyNames.length; i++) {
        enemyHealth = 50;
        fight(enemyNames[i]);
    }