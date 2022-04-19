document.addEventListener('DOMContentLoaded', () => {

    let cardArrayBiggest = [
        {
            name: 'potato',
            img: 'images/vegetables/potato.png'
        },
        {
            name: 'potato',
            img: 'images/vegetables/potato.png'
        },
        {
            name: 'beans',
            img: 'images/vegetables/beans.png'
        },
        {
            name: 'beans',
            img: 'images/vegetables/beans.png'
        },
        {
            name: 'bell-pepper',
            img: 'images/vegetables/bell-pepper.png'
        },
        {
            name: 'bell-pepper',
            img: 'images/vegetables/bell-pepper.png'
        },
        {
            name: 'broccoli',
            img: 'images/vegetables/broccoli.png'
        },
        {
            name: 'broccoli',
            img: 'images/vegetables/broccoli.png'
        },
        {
            name: 'cabbage',
            img: 'images/vegetables/cabbage.png'
        },
        {
            name: 'cabbage',
            img: 'images/vegetables/cabbage.png'
        },
        {
            name: 'carrot',
            img: 'images/vegetables/carrot.png'
        },
        {
            name: 'carrot',
            img: 'images/vegetables/carrot.png'
        },
        {
            name: 'eggplant',
            img: 'images/vegetables/eggplant.png'
        },
        {
            name: 'eggplant',
            img: 'images/vegetables/eggplant.png'
        },
        {
            name: 'onion',
            img: 'images/vegetables/onion.png'
        },
        {
            name: 'onion',
            img: 'images/vegetables/onion.png'
        }
    ]

    let cardArrayBig = [
        {
            name: 'cow',
            img: 'images/animal/cow.png'
        },
        {
            name: 'cow',
            img: 'images/animal/cow.png'
        },
        {
            name: 'fox',
            img: 'images/animal/fox.png'
        },
        {
            name: 'fox',
            img: 'images/animal/fox.png'
        },
        {
            name: 'koala',
            img: 'images/animal/koala.png'
        },
        {
            name: 'koala',
            img: 'images/animal/koala.png'
        },
        {
            name: 'lion',
            img: 'images/animal/lion.png'
        },
        {
            name: 'lion',
            img: 'images/animal/lion.png'
        },
        {
            name: 'livestock',
            img: 'images/animal/livestock.png'
        },
        {
            name: 'livestock',
            img: 'images/animal/livestock.png'
        },
        {
            name: 'turtle',
            img: 'images/animal/turtle.png'
        },
        {
            name: 'turtle',
            img: 'images/animal/turtle.png'
        }
    ]


    let cardArraySmall = [
        {
            name: 'apple',
            img: 'images/fruits/apple.png'
        },
        {
            name: 'apple',
            img: 'images/fruits/apple.png'
        },
        {
            name: 'lemon',
            img: 'images/fruits/lemon.png'
        },
        {
            name: 'lemon',
            img: 'images/fruits/lemon.png'
        },
        {
            name: 'strawberry',
            img: 'images/fruits/strawberry.png'
        },
        {
            name: 'strawberry',
            img: 'images/fruits/strawberry.png'
        },
        {
            name: 'bananas',
            img: 'images/fruits/bananas.png'
        },
        {
            name: 'bananas',
            img: 'images/fruits/bananas.png'
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
var cardArray = cardArraySmall;


} else if (valueInput == 1) {

var cardArray = cardArrayBig;    
} else {
    var cardArray = cardArrayBiggest;
} 
    

cardArray.sort(() => 0.5 - Math.random());



//create pexeso cards
function createCards() {
    for (let i = 0; i<cardArray.length; i++) {

        
            var card = document.createElement('img');
            var newDiv = document.createElement('div');
            newDiv.classList.add('container--card__match');
            
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            containerCard.appendChild(newDiv);
            newDiv.appendChild(card);

       
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
        successDisplayEnd.textContent = resultSuccess;

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



