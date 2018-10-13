'use strict';

//Global variables:
const NUM_OF_QUESTS = 3;

var gNextQuestId = 1;
var gQuests = createQuests();
var gCurrQuestIdx = 0;
// renderQuest();

function init() {
    if(gCurrQuestIdx >= NUM_OF_QUESTS) {
        alert('Congratulations!\nYou have done all of the questions.');
        return;
    }
    for (var i = 0 ; i < gQuests.length ; i++) {
        renderQuest();
        renderImg();
    }
}

function createQuests() {
    var quests = [];
    for (var i = 0; i < NUM_OF_QUESTS; i++) {
        quests[i] = {
            id: gNextQuestId++,
            opts: [],
            correctOptIndex: 1
        };
    }

    //fill opts:
    quests[0].opts = ['Dog' , 'Mouse'];
    quests[0].correctOptIndex = 0;

    quests[1].opts = ['Bird' , 'Cat'];
    quests[1].correctOptIndex = 1;

    quests[2].opts = ['Lion' , 'Bunny'];
    quests[2].correctOptIndex = 0;

    return quests;
}

function renderQuest() {
    var strHTML = ''
    var currQuest = gQuests[gCurrQuestIdx];

    strHTML += '<br/>';
    for (var i = 0; i < currQuest.opts.length; i++) {
        strHTML += `<div onclick="checkAnswer(${i})">`;
        strHTML += currQuest.opts[i];
        strHTML += '</div>';
        strHTML += '<br/>';
    }


    var elAnswers = document.querySelector('.answers');
    elAnswers.innerHTML = strHTML;
}

function renderImg() {
    var elImg = document.querySelector('.image img');
    elImg.src = `img/${gQuests[gCurrQuestIdx].id}.jpg`;
}

function checkAnswer(elAnswerIdx) {
    if(gCurrQuestIdx >= gQuests.length) {
        return;
    }

    console.log(elAnswerIdx);
    console.log(gQuests[gCurrQuestIdx].correctOptIndex);

    var greets = ['Great!' , 'Good!' , 'You\'re Right!'];

    if(elAnswerIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        alert(greets[Math.floor(Math.random() * 3)]);
        gCurrQuestIdx++;
        init();
    } else {
        alert('Try Again..');
    }
}
