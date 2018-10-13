'use strict';

// This creature is called IIFE.
// I'm using it here to avoid global variable and functions
// (You will understand and start using those techniques later on (week ~5))
(function() {

    // When page reloads, add the current script I'm working on
    if (sessionStorage.currScriptNum) {
        addScript(sessionStorage.currScriptNum)
    }

    createButtons();

function createButtons() {

    var htmlStr = '';
    var exContainer = document.getElementById('ex-container');

    for (var i = 1; i <= gNumOfExercises; i++){
        var scriptNum = convertToTwoDigitsStr(i);
        var btn = document.createElement("button");
        btn.innerText = scriptNum;
        btn.addEventListener('click', addScript.bind(null, scriptNum));
        exContainer.append(btn);
    }
}


function addScript(scriptNum) {
    //Append the requested script
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.className = 'studentScript';
    s.src = 'ex/' + scriptNum + '.js';
    document.head.appendChild(s);

    // Remember the script we are working on so after refresh, no need to repress the button
    sessionStorage.currScriptNum = scriptNum;

}

function convertToTwoDigitsStr(num){
    return num > 9 ? "" + num: "0" + num;
}



})();