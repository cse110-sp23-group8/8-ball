const characters = {
    spongebob: {
        messages: [
            'It is certain.',
            'Without a doubt.',
            'You may rely on it.',
            'Yes, definitely.',
            'It is decidedly so.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy, try again later.',
            'Better not tell you now.',
            'Concentrate and ask again.',
            'My sources say yes.',
            'All signs point to yes.',
            'It\'s looking good.',
            'The stars are aligned in your favor.',
            'You can count on it.',
            'Things are looking up.',
            'It\'s a definite yes.'
        ],

        soundEffect: new Audio('./assets/spongebob.mp3')
    },

    squidward: {
        messages: [
            'Signs point to no.',
            'Outlook not so good.',
            'Don\'t count on it.',
            'My sources say no.',
            'Very doubtful.',
            'Without a doubt, no.',
            'Reply hazy, try again later.',
            'Better not tell you now.',
            'Concentrate and ask again.',
            'My reply is no.',
            'It is decidedly so not.',
            'Outlook not good.',
            'Ask again later.',
            'My sources say no.',
            'Don\'t hold your breath.',
            'All signs point to no.',
            'Very unlikely.',
            'Signs are not in your favor.',
            'The answer is no.',
            'You may want to rethink that idea.'
        ],

        soundEffect: new Audio('./assets/squidward.mp3')
    },

    mrKrabs: {
        messages: [
            'The winds are in your favor.',
            'It\'s not the right time to set sail.',
            'A fruitful journey is ahead.',
            'Avoid the storm on the horizon.',
            'Your ship will weather the rough waters.',
            'Be cautious of treacherous waters ahead.',
            'A calm sea will guide you.',
            'Stay anchored for now.',
            'The tides are turning in your favor.',
            'It\'s not a good time to take risks.',
            'Your voyage will lead to success.',
            'Dangerous waters ahead, proceed with caution.',
            'Positive omens suggest a successful voyage.',
            'Challenges lie ahead, but success is within reach.',
            'Collaboration with others will guide your sails to safe waters.',
            'A decision made now will have a significant impact.'
        ],

        soundEffect: new Audio('./assets/mr-krabs.mp3')
    }
};

// Add event listeners to each character
const characterElements = document.querySelectorAll('.character');
characterElements.forEach(character => character.addEventListener('click', selectCharacter));

const sumbitButton = document.getElementById('ask-btn');
sumbitButton.addEventListener('click', showMessage);

function showMessage() {
    

    const selectedCharacter = document.querySelector('.character.selected').id;
    

    // Check if the question box has a question
    const questionBox = document.getElementById('question');
    if (questionBox.value.trim() === '') {
        alert('Please enter a question.');
        return;
    }

    const bubbles = document.querySelectorAll('.bubble');
    const characterData = characters[selectedCharacter];
    const randomIndex = Math.floor(Math.random() * characterData.messages.length);
    const randomMessage = characterData.messages[randomIndex];

    // Display the message in a designated area
    const messageElement = document.getElementById('response');
    messageElement.textContent = 'Thinking...';
    
    bubbles.forEach((bubble) => {
        bubble.style.opacity = 1;
    });

    messageTimeout = setTimeout(() => {
        characterData.soundEffect.play();
        messageElement.textContent = randomMessage;
    }, 1000 + Math.random() * 1000);
}

function selectCharacter(event) {
    const clickedElement = event.target;

    // Deselect all characters
    const allCharacters = document.querySelectorAll('.character');
    allCharacters.forEach(character => character.classList.remove('selected'));

    // Select the clicked character
    clickedElement.classList.add('selected');
}