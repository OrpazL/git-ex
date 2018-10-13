'use strict';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;

$(document).ready(init);

// var TreeStorage = {
//     set: function() {localStorage.questTree = JSON.stringify(tree);},
//     get: function() {}
// }

function saveTree(tree) {
    localStorage.questTree = JSON.stringify(tree);
}

function init() {
    if (localStorage.questTree) {
        gQuestsTree = JSON.parse(localStorage.questTree);
    } else {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    }

    console.log(gQuestsTree.yes, gQuestsTree.no);

    gCurrQuest = gQuestsTree;
}

function startGuessing() {
    // TODO: hide the gameStart section
    var $elGameStart = $('.gameStart');
    $elGameStart.hide();

    renderQuest();
    // TODO: show the gameQuest section
    var $elGameQuest = $('.gameQuest');
    $elGameQuest.show();
}

function renderQuest() {
    // TODO: select the <h2> inside gameQuest and update its text by the currQuest text
    var $elQuestion = $('.gameQuest h2');
    $elQuestion.html(`${gCurrQuest.txt}`);
    // var $elGameStart = $('.gameStart');
    // $elGameStart.hide();
}

function userResponse(res) {
    // var $elGameStart = $('.gameStart');
    // $elGameStart.hide();
    // If this node has no children
    if (isChildless(gCurrQuest)) {
        if (res === 'yes') {
            alert('Yes, I knew it!');
            // TODO: improve UX
            // restartGame();
            var $elGameQuest = $('.gameQuest');
            $elGameQuest.hide();
            $('.gameStart').show();

        } else {
            alert('I dont know...teach me!');
            // TODO: hide and show gameNewQuest section
            var $elGameQuest = $('.gameQuest');
            $elGameQuest.hide();
            var $elGameNewQuest = $('.gameNewQuest');
            $elGameNewQuest.show();
            // $('.gameStart').show();
        }
    } else {
        // TODO: update the prev, curr and res global vars
        // if (res === 'yes') {
        //     gLastRes = gQuestsTree.yes;
        // }
        gLastRes = res;
        gPrevQuest = gCurrQuest;
        gCurrQuest = gCurrQuest[res];
        // gCurrQuest = gCurrQuest.txt;
        // startGuessing();
    }
    renderQuest();
}

function addGuess() {
    // TODO: create 2 new Quests based on the inputs' values
    var $elCurrGuess = $('#newGuess').val();
    var $elCurrQuest = $('#newQuest').val();
    // console.log('elCurrGuess', $elCurrGuess, 'elCurrQuest', $elCurrQuest);
    var newQuest = createQuest($elCurrQuest);
    newQuest.yes = createQuest($elCurrGuess);
    newQuest.no = gCurrQuest;
    gPrevQuest[gLastRes] = newQuest;

    // TODO: connect the 2 Quests to the quetsions tree
    restartGame();
    // return gQuestsTree.yes;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    };
}

function restartGame() {
    saveTree(gQuestsTree);
    $('.gameNewQuest').hide();
    $('.gameStart').show();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    gLastRes = null;
}

function isChildless(node) {
    return node.yes === null || node.no === null;
}
