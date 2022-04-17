document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'cow',
            img: 'images/cow.png'
        },
        {
            name: 'cow',
            img: 'images/cow.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'koala',
            img: 'images/koala.png'
        },
        {
            name: 'koala',
            img: 'images/koala.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'livestock',
            img: 'images/livestock.png'
        },
        {
            name: 'livestock',
            img: 'images/livestock.png'
        },
        {
            name: 'turtle',
            img: 'images/turtle.png'
        },
        {
            name: 'turtle',
            img: 'images/turtle.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

const containerCard = document.querySelector('.container--card')
const resultDisplay = document.querySelector('#container--info-second__score')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create pexeso cards
function createCards() {
    for (let i = 0; i<cardArray.length; i++) {
        var card = document.createElement('img')
        var newDiv = document.createElement('div')
        newDiv.classList.add('container--card__match');
        
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        containerCard.appendChild(newDiv)
        newDiv.appendChild(card)
    }
}
// check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1]) {
        cards[optionOneId].style.display = "none";
        cards[optionTwoId].style.display = "none";
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardsChosen = []
    cardsChosenId= []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulation'
    }
}


// flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }

}


createCards()

})