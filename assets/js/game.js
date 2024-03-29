// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

// function to set name
var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
}

/* object to store robot's name */
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 50 for 7 dollars.");
            this.health += 50;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player attack by 8 for 7 dollars.");
            this.attack += 8;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!")
        }
    }
};
console.log(playerInfo.name, playerInfo.health, playerInfo.attack, playerInfo.money);

var enemyInfo = [{
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


//Start game
var startGame = function () {
    playerInfo.reset();
    //fight each enemy robot
    for (var i = 0; i < enemyInfo.length; i++) {
        //if player is alive, keep fighting
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            //pass picked enemy name variable into function
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    window.alert("The game has now ended. Let's see how you did!");

    var highScore = localStorage.getItem("highscore");
    if(highScore === null) {
        highScore = 0;
    }
    //Condition to check player's status
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has a high score of " + playerInfo.money + "!");
    } else {
        window.alert(playerInfo.name + " did not beat the high score of " + highScore + "... Better luck next time!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var fightOrSkip = function () {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Do you wish to FIGHT or SKIP the battle?");
    promptFight = promptFight.toLowerCase();
    // conditional recursive function call
    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // if player picks "skip" confirm and stop loop
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
        return false;
    }

}



/* function to declare the start of the fight */
var fight = function (enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;
    
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn){
            // call fightOrSkip function
            if(fightOrSkip()) {
                break;
            }


            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " still remaining.");
    
            // check enemy health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died.");
                playerInfo.money = playerInfo.money + 20;
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }   
        } else {
            // enemy attack
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " still remaining.");
            
            // check player health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died.");
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }

        // switch turn order for next round
        isPlayerTurn = !isPlayerTurn;
    }
};

var shop = function () {
    // ask player what they'd like to do
    var shopOptionPromt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for 'REFILL', 2 for 'UPGRADE', or 3 to 'LEAVE' to make a choice."
    );
    shopOptionPromt = parseInt(shopOptionPromt);

    // use switch statements to carry out option
    switch (shopOptionPromt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
        case 3:
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