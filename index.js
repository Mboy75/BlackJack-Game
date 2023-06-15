
let cards = []                  //defined the card array 
let hasBlackjack = false       // booleans
let isAlive = false            // booleans
let message = ""
let sum = 0
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

let player = {              // created player obdject
    name: "Mssi",
    chips: 145
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard () {
    let randomNumber = Math.floor(Math.random() * 13) + 1 
        if (randomNumber > 10 ) {
            return 10                               // return statments
        }else if (randomNumber === 1 ) {
            return 11                               // return statments
        }else {
            return randomNumber                     // return statments
        }
    
    
}

const startGame = () => {
    isAlive = true                           // fleep the boolean out 
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()
    cards = [ firstCard, secondCard]       //reassign the card array in the function with items
    sum = firstCard + secondCard
    renderGame()
}

const renderGame = () => {
    cardEl.textContent = "card: "
    for (let i = 0; i < cards.length; i++) {        // for loops & render out the card
        cardEl.textContent += cards[i] + " "
        
    }
    sumEl.textContent = " sum: " + sum 

    if (sum < 21) {                        // used if else statments and comparison operators
        message = "Do you want a new card"

    }else if (sum === 21) {
        message = "you have got the blackjack"
        hasBlackjack = true                     // fleep the boolean out 

    }else {
        message = "Game Over"
        isAlive = false                        // fleep the boolean out 
    }

    // cash out 
    messageEl.textContent = message
    
}

const newCard = () =>{
    if (isAlive === true && hasBlackjack === false ) {    // logical operators
        let thirdcard = getRandomCard()
        sum += thirdcard
        cards.push(thirdcard)         // push the third card to the array
        renderGame()
    }
    

}

let sentence = ["Hello ", "Massi"]
let greetingEl = document.querySelector("#greeting-el")
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
    
}

const rollDice = () => {
    let randomNUmber = Math.floor(Math.random() * 6) + 1      // math.random-floor
    return rollDice
}

console.log(rollDice())




    








