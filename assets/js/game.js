/* variable to store robot's name */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;


//Start game
var startGame = function() {
    //reset player stats
    playerHealth= 100;
    playerAttack = 10;
    playerMoney = 10;

    //fight each enemy robot
    for(var i = 0; i < enemyNames.length; i++) {
        //if player is alive, keep fighting
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            //pass pickedEnemyName variable into function
            fight(pickedEnemyName);
            }
            else {
                window.alert("You have lost your robot in the battle! Game over!");
            }
        }
        endGame();
    };
    

    var endGame = function() {
        //Condition to check player's status
        if (playerHealth > 0) {
            window.alert("The game has now ended. Let's see how you did!");
        }else {
            window.alert("You've lost your robot in battle.");
        }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
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

// Start game
startGame();