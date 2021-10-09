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
var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //fight each enemy robot
    for (var i = 0; i < enemyNames.length; i++) {
        //if player is alive, keep fighting
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            //pass pickedEnemyName variable into function
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to visit shop before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")

                // if yes, call shop() function
                if (storeConfirm) {
                    shop();
                }
            } else {
                window.alert("You have lost your robot in the battle! Game over!");
            }
        }
    }
    endGame();
};


var endGame = function () {
    //Condition to check player's status
    if (playerHealth > 0) {
        window.alert("The game has now ended. Let's see how you did!");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
/* function to declare the start of the fight */
var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Do you wish to FIGHT or SKIP the battle?");

        //if player picks "skip" confirm and stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney -= 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // if player chooses to fight, then fight
        // player attack
        enemyHealth -= playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " still remaining.");

        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // enemy attack
        playerHealth -= enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " still remaining.");

        // check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died.");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

var shop = function () {
    // ask player what they'd like to do
    var shopOptionPromt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // use switch statements to carry out option
    switch (shopOptionPromt) {
        case "REFILL": // new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refillingp layer's health by 20 for 7 dollars");

                // increase health and decrease money
                playerHealth += 20;
                playerMoney -= 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars");

            // increase attack and decrease money
            playerAttack += 6;
            playerMoney -= 7;
            }
            else {
                window.alert("You do not have enough money!");
            }
            break;

        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("Please pick a valid option!");

            // call shop() to force player to enter valid option
            shop();
            break;
    }
};

// Start game
startGame();