const majorArcana = [
    {   
        'number': ' 0',
        'name': 'The Fool',
        'meaning': 'embracing all that lies ahead of you without worry.',
        'path': './resources/images/0-the-fool.jpg'
    },
    {   
        'number': ' 1',
        'name': 'The Magician',
        'meaning': 'knowing that you already hold everything you need to move forward.',
        'path': './resources/images/1-the-magician.jpg'
    },
    {   
        'number': ' 2',
        'name': 'The High Priestess',
        'meaning': 'listening to your inner voice and following your instincts.',
        'path': './resources/images/2-the-high-priestess.jpg'
    },
    {   
        'number': ' 3',
        'name': 'The Empresss',
        'meaning': 'absorbing the energy of the natural world around you and being more compassionate.',
        'path': './resources/images/3-the-empress.jpg'
    },
    {   
        'number': ' 4',
        'name': 'The Emperor',
        'meaning': 'understanding that you are in control of your own life and what happens to it.',
        'path': './resources/images/4-the-emperor.jpg'
    },
    {   
        'number': ' 5',
        'name': 'The Hierophant',
        'meaning': 'following the rules and finding a spiritual perspective on your current situation.',
        'path': './resources/images/5-the-hierophant.jpg'
    },
    {   
        'number': ' 6',
        'name': 'The Lovers',
        'meaning': 'considering all the possible consequences of your choices when at a crossroads.',
        'path': './resources/images/6-the-lovers.jpg'
    },
    {   
        'number': ' 7',
        'name': 'The Chariot',
        'meaning': 'combining the knowledge of your mind with that of your heart and spirit to connect to your natural drive and determination.',
        'path': './resources/images/7-the-chariot.jpg'
    },
    {   
        'number': ' 8',
        'name': 'Strength',
        'meaning': 'recalling that you are strong enough to handle whatever you are facing.',
        'path': './resources/images/8-strength.jpg'
    },
    {   
        'number': ' 9',
        'name': 'The Hermit',
        'meaning': 'withdrawing from the noise of the world and finding the answers within.',
        'path': './resources/images/9-the-hermit.jpg'
    },
    {   
        'number': '10',
        'name': 'Wheel of Fortune',
        'meaning': 'remembering that nothing is permanent and cherishing the lessons brought to you by this moment.',
        'path': './resources/images/10-wheel-of-fortune.jpg'
    },
    {   
        'number': '11',
        'name': 'Justice',
        'meaning': 'making sure that you are acting fairly in all your interactions with others.',
        'path': './resources/images/11-justice.jpg'
    },
    {   
        'number': '12',
        'name': 'The Hanged Man',
        'meaning': 'detaching from the outcome of your situation to help you release yourself.',
        'path': './resources/images/12-the-hanged-man.jpg'
    },
    {   
        'number': '13',
        'name': 'Death',
        'meaning': 'understanding that hanging on to situations from the past will hinder you from allowing new, better things to enter your life.',
        'path': './resources/images/13-death.jpg'
    },
    {   
        'number': '14',
        'name': 'Temperance',
        'meaning': 'taking things as they come, and remaining flexible enough to change with the changes.',
        'path': './resources/images/14-temperance.jpg'
    },
    {   
        'number': '15',
        'name': 'The Devil',
        'meaning': 'understanding that you hold the keys to your own freedom, but it is up to you to open the lock.',
        'path': './resources/images/15-the-devil.jpg'
    },
    {   
        'number': '16',
        'name': 'The Tower',
        'meaning': 'tearing down the weakest parts of your life in order to build something strong and sturdy in their place.',
        'path': './resources/images/16-the-tower.jpg'
    },
    {   
        'number': '17',
        'name': 'The Star',
        'meaning': 'knowing that the universe is working in your favour and having faith in where you are being taken.',
        'path': './resources/images/17-the-star.jpg'
    },
    {   
        'number': '18',
        'name': 'The Moon',
        'meaning': 'drawing your feelings to the surface, and addressing them in order to rid yourself of worry.',
        'path': './resources/images/18-the-moon.jpg'
    },
    {   
        'number': '19',
        'name': 'The Sun',
        'meaning': 'lifting your head and realizing all the good situations and people surrounding you now and always.',
        'path': './resources/images/19-the-sun.jpg'
    },
    {   
        'number': '20',
        'name': 'Judgement',
        'meaning': 'reviewing your decisions and actions until now, to ensure they are inline with where you ultimately want to go.',
        'path': './resources/images/20-judgement.jpg'
    },
    {   
        'number': '21',
        'name': 'The World',
        'meaning': 'kowing that you are exactly where you are meant to be and you are ready for the next phase of your journey.',
        'path': './resources/images/21-the-world.jpg'
    }
        
];

const getRandomNum = () => {
    return Math.floor(Math.random() * 23);
};


const firstCard = () => {
    return majorArcana[getRandomNum()];
}

const secondCard = (a) => {
    let randomCard = majorArcana[getRandomNum()];
    while(randomCard === a) {
        randomCard = majorArcana[getRandomNum()];
    };
    return randomCard;
}

const thirdCard = (a, b) => {
    let randomCard = majorArcana[getRandomNum()];
    while(randomCard === a || randomCard === b) {
        randomCard = majorArcana[getRandomNum()];
    };
    return randomCard;
}

    const card1 = document.createElement('img');
    const message1 = document.createElement('div');
    const st = document.createElement('h3');

    const card2 = document.createElement('img');
    const message2 = document.createElement('div');
    const nd = document.createElement('h3');

    const card3 = document.createElement('img');
    const message3 = document.createElement('div');
    const rd = document.createElement('h3');

const getReading = () => {
    const day1 = document.querySelector('#day1');
    const day2 = document.querySelector('#day2');
    const day3 = document.querySelector('#day3');
    for (let i = 0; i < day1.length; i++) {
        day1.removeChild();
    }
    for (let i = 0; i < day2.length; i++) {
        day2.removeChild();
    }
    for (let i = 0; i < day3.length; i++) {
        day3.removeChild();
    }


    const yesterday = firstCard();
    const today = secondCard(yesterday);
    const tomorrow = thirdCard(yesterday, today);

    card1.src = yesterday['path'];
    message1.textContent = 'Yesterday\'s lesson was about ' + yesterday['meaning'];
    st.textContent = 'Yesterday';

    card2.src = today['path'];
    message2.textContent = 'Today is about ' + today['meaning'];
    nd.textContent = 'Today';

    card3.src = tomorrow['path'];
    message3.textContent = 'Tomorrow advises ' + tomorrow['meaning'];
    rd.textContent = 'Tomorrow';

    day1.appendChild(st);
    day2.appendChild(nd);
    day3.appendChild(rd);

    day1.appendChild(card1);
    day2.appendChild(card2);
    day3.appendChild(card3);

    day1.appendChild(message1);
    day2.appendChild(message2);
    day3.appendChild(message3);

}

const reading = document.querySelector('button');
reading.addEventListener('click', getReading);




