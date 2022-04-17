document.addEventListener('DOMContentLoaded', () => {

    let cardArrayBiggest = [
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

    let cardArrayBig = [
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


    let cardArraySmall = [
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
        }
    ]




//Game start 


document.getElementById("gamestart").addEventListener('click', () => {


// Define variables

let containerCard = document.querySelector('.container--card');
let resultDisplay = document.querySelector('#container--info-second__score');
let triesDisplay = document.querySelector('#container--info-second__tries');
let resultDisplayEnd = document.querySelector('#container--modal--end__score');
let triesDisplayEnd = document.querySelector('#container--modal--end__tries');
let successDisplayEnd = document.querySelector('#container--modal--end__success');
let containerModal = document.querySelector('.container--modal');
let containerModalEnd = document.querySelector('.container--modal--end');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let numTries = 0;





valueInput = document.querySelector('input[type="radio"]:checked').value;

// hide modal container

containerModal.classList.add('hide');



// choose which array to show based on input check

if (valueInput == 0) {
var cardArray = cardArraySmall


} else if (valueInput == 1) {

var cardArray = cardArrayBig    
} else {
    var cardArray = cardArrayBiggest
} 
    

cardArray.sort(() => 0.5 - Math.random());



//create pexeso cards
function createCards() {
    for (let i = 0; i<cardArray.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('container--card__match');

        let newDivCardBack = document.createElement('div');
        newDivCardBack.classList.add('card-back', 'card-face');
        let newDivCardFront = document.createElement('div');
        newDivCardFront.classList.add('card-front', 'card-face');


        let card = document.createElement('img');
        
        
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        containerCard.appendChild(newDiv);
        newDiv.appendChild(newDivCardBack);
        newDiv.appendChild(newDivCardFront);
        newDivCardBack.appendChild(card);
    }
}


// check for matches
function checkForMatch() {
    let cards = document.querySelectorAll('img');
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];
    
    
    if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] != cardsChosenId[1]) {
        cards[optionOneId].style.display = "none";
        cards[optionTwoId].style.display = "none";
        cardsWon.push(cardsChosen);
        numTries++;
        
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        numTries++;
        
    }
    cardsChosen = [];
    cardsChosenId= [];
    console.log(numTries);
    resultDisplay.textContent = cardsWon.length;
    triesDisplay.textContent = numTries;
    if (cardsWon.length === cardArray.length/2) {
        containerModalEnd.classList.remove('hide');
        resultDisplay.textContent = cardsWon.length;
        triesDisplay.textContent = numTries;
        resultDisplayEnd.textContent = cardsWon.length;
        triesDisplayEnd.textContent = numTries;
        let resultSuccess = Math.round((cardsWon.length / numTries) * 100);
        successDisplayEnd.textContent = resultSuccess

    }
}




// flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }

}

//End game

document.getElementById("gameend").addEventListener('click', () => {
    location.reload();
})



createCards()

})

})



