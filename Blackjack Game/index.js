let cards =[]
let sum = 0
let hasBlackjack = false
let isAlive = false
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerName = "Hauwa"
let playerChips = 120

let playerEl = document.getElementById("player-el")
playerEl.textcontent= playerName + "#" + playerChips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber < 10) {
        return 10
    } else if (randomNumber > 10) {
        return 11
    } else{
        return randomNumber
    }

}

function StartGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard, secondCard]
    sum = fisrtCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textcontent = "Cards:"
    for (let i = 0; i < cards.length; i++){
        cardsEl.textcontent += cards[i] + ""
}

sumEl.textcontent = "Sum:" + sum
if (sum<= 20) {
     message = "Do you want to draw a new card?"
} else if (sum === 21){
    message = "Youve got a blackjack!"
    hasBlackjack = true
} else {
    message = "You are out of the game"
    isAlive = false
}
messageEl.textcontent = message
}

function newCard(){
    let card = sum += card
    cards.push(card)
    console.log(cards)
    renderGame()


}