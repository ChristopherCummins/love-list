function getRandomNumber() {
    checkListLength();
    let possibleOutcomes = loveList.length;
    let randomNumber = Math.floor(Math.random() * possibleOutcomes);
    console.log(randomNumber);
    return randomNumber;
}

function getRandomReason(randomNumber) {
    let randomReason = loveList[randomNumber];
    console.log(randomReason);
    return randomReason;
}

function removeReason(randomNumber) {
    index = loveList.indexOf(randomNumber);
    loveList.splice(randomNumber, 1);
}

function postRandomReason() {
    const domReasonBubble = document.getElementsByClassName("quote")[0];
    let number = getRandomNumber();
    domReasonBubble.innerHTML = getRandomReason(number);
    removeReason(number);
}

function createButton() {
    const domAnother = document.getElementsByClassName('another')[0];
    domAnother.addEventListener("click", postRandomReason);
}

function runApp() {
    createButton();
    postRandomReason();    
}

function checkListLength() {
    if (loveList.length == 0) {
        loveList = [
            "I love that you answer the phone when your sponsees call you.",
            "I love the way you pronounce the second syllable in the word 'hilarious'.",
            "I love that living with you feels like every day is Christmas (raining packages).",
            "I love the kind of attentive and caring father you are to Belle.",
            "I love how you squeeze my feet when they're tense.",
            "I love the way you reply 'a book' when I ask you what you bought.",
            "I love the way you guide me out of danger's way.",
            "I love your willingness to explain astrology to willing ears.",
            "I love the honesty you display with yourself.",
            "I love that you choose to cheer me on with nearly everything I do.",
            "I love that you seek to teach.",
            "I love that you keep your spiritual center open for growth and learning opportunities.",
            "I love the way you make it a point to help other people.",
            "I love the generosity you give your friends.",
            "I love the way you know when to gently set a boundary to care for yourself.",
            "I love the way you say 'WHAAAT?' when you realize you have an chance to introduce me to something new.",
            "I love that you share your love with my family.",
            "I love that you are willing to share your recovery and insights publicly on social media.",
            "I love that you call so many things 'toys'.",
            "I love when you scream laugh.",
            "I love that you try new things.",
            "I love that you're polyamorous.",
            "I love the way you give me space to grow.",
            "I love the way you talk to your mother on the phone.",
            "I love that you can tease my family and ge them laughing.",
            "I love that you spend so much energy protecting our home.",
            "I love when you geek out about something from your childhood.",
            "I love that you see being a geek as a good thing.",
            "I love that you know exactly how many head scratches I need.",
            "I love that you value having diverse perspectives in your life.",
            "I love that you are a perpetual learner.",
            "I love that you support causes close to your heart.",
            "I love that you don't shy away from explaining why justice for Artpop is still needed.",
            "I love that you don't let fear stop you from showing your feelings.",
            "I love that you know things may be difficult and do them anyway.",
            "I love that you take an active role in engineering a life that fuels your spirit.",
            "I love that you see the potential in people.",
            "I love that you regard people for who they are, rather than what they can do for you.",
            "I love that you sing to yourself.",
            "I love the way you help people see what they do right for themselves.",
            "I love the way your stubble tickles me when you kiss me.",
            "I love that you can ask for what you want and deserve.",
            "I love how considerately you think about other people",
            "I love the way you will open a window when it's 17 degrees outside.",
            "I love the way you say 'bebe'.",
            "I love that you're an encyclopedia of everything that's ever happened in New York City after 1985.",
            "I love the way you're willing to lead others.",
            "I love that you can motivate others to believe they can have a more satisfying life.",
            "I love the way you share your knowledge with others rather than hoard it to yourself.",
            "I love that you have a witchy cure for any symptom.",
            "I love the way you guide others through casting spells",
            "I love the faces you make when you really have something to say.",
            "I love when you imitate me.",
            "I love that you have a workshopped impression of anyone ready to go at a moment's notice.",
            "I love how intensely you love.",
            "I love the way you say 'lil baby animals'.",
            "I love the awe on your face when you see a cute raccoon or otter you like.",
            "I love when you call any person or group of people 'the dolls'.",
            "I love when you know something from one of my siblings before I do.",
            "I love that you use your experience to help others.",
            "I love that you can take me back down to this planet and ground me.",
            "I love how great you are at right-sizing your thoughts and those of other people.",
            "I love that you ask other people for guidance.",
            "I love the way you defend people you love.",
            "I love that you have allowed your relationship with your spirituality to evolve.",
            "I love the way your giggle at your phone to yourself.",
            "I love that you can tell a story better than anyone else.",
            "I love the way you dance.",
            "I love how you give weight to all of your relationships."
        ]
    }
}


let loveList = [
    "I love that you answer the phone when your sponsees call you.",
    "I love the way you pronounce the second syllable in the word 'hilarious'.",
    "I love that living with you feels like every day is Christmas (raining packages).",
    "I love the kind of attentive and caring father you are to Belle.",
    "I love how you squeeze my feet when they're tense.",
    "I love the way you reply 'a book' when I ask you what you bought.",
    "I love the way you guide me out of danger's way.",
    "I love your willingness to explain astrology to willing ears.",
    "I love the honesty you display with yourself.",
    "I love that you choose to cheer me on with nearly everything I do.",
    "I love that you seek to teach.",
    "I love that you keep your spiritual center open for growth and learning opportunities.",
    "I love the way you make it a point to help other people.",
    "I love the generosity you give your friends.",
    "I love the way you know when to gently set a boundary to care for yourself.",
    "I love the way you say 'WHAAAT?' when you realize you have an chance to introduce me to something new.",
    "I love that you share your love with my family.",
    "I love that you are willing to share your recovery and insights publicly on social media.",
    "I love that you call so many things 'toys'.",
    "I love when you scream laugh.",
    "I love that you try new things.",
    "I love that you're polyamorous.",
    "I love the way you give me space to grow.",
    "I love the way you talk to your mother on the phone.",
    "I love that you can tease my family and ge them laughing.",
    "I love that you spend so much energy protecting our home.",
    "I love when you geek out about something from your childhood.",
    "I love that you see being a geek as a good thing.",
    "I love that you know exactly how many head scratches I need.",
    "I love that you value having diverse perspectives in your life.",
    "I love that you are a perpetual learner.",
    "I love that you support causes close to your heart.",
    "I love that you don't shy away from explaining why justice for Artpop is still needed.",
    "I love that you don't let fear stop you from showing your feelings.",
    "I love that you know things may be difficult and do them anyway.",
    "I love that you take an active role in engineering a life that fuels your spirit.",
    "I love that you see the potential in people.",
    "I love that you regard people for who they are, rather than what they can do for you.",
    "I love that you sing to yourself.",
    "I love the way you help people see what they do right for themselves.",
    "I love the way your stubble tickles me when you kiss me.",
    "I love that you can ask for what you want and deserve.",
    "I love how considerately you think about other people",
    "I love the way you will open a window when it's 17 degrees outside.",
    "I love the way you say 'bebe'.",
    "I love that you're an encyclopedia of everything that's ever happened in New York City after 1985.",
    "I love the way you're willing to lead others.",
    "I love that you can motivate others to believe they can have a more satisfying life.",
    "I love the way you share your knowledge with others rather than hoard it to yourself.",
    "I love that you have a witchy cure for any symptom.",
    "I love the way you guide others through casting spells",
    "I love the faces you make when you really have something to say.",
    "I love when you imitate me.",
    "I love that you have a workshopped impression of anyone ready to go at a moment's notice.",
    "I love how intensely you love.",
    "I love the way you say 'lil baby animals'.",
    "I love the awe on your face when you see a cute raccoon or otter you like.",
    "I love when you call any person or group of people 'the dolls'.",
    "I love when you know something from one of my siblings before I do.",
    "I love that you use your experience to help others.",
    "I love that you can take me back down to this planet and ground me.",
    "I love how great you are at right-sizing your thoughts and those of other people.",
    "I love that you ask other people for guidance.",
    "I love the way you defend people you love.",
    "I love that you have allowed your relationship with your spirituality to evolve.",
    "I love the way your giggle at your phone to yourself.",
    "I love that you can tell a story better than anyone else.",
    "I love the way you dance.",
    "I love how you give weight to all of your relationships."

    ];

runApp();
