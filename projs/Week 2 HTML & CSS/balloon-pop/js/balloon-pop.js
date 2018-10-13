
var gBalloons = [];
const HEIGHT_LIMIT = 300;
init();

function init() {
    var elBalloons = document.querySelectorAll('.balloon');
    for (var i = 0; i < elBalloons.length; i++) {
        var elBalloon = elBalloons[i];
        gBalloons[i] = {
            bottom: 0,
            speed: 10
        };
        liftBalloon(i, elBalloon);
    }
    // console.log(gBalloons);
}

function liftBalloon(balloonIdx, elBalloon) {
    var interval = setInterval(function () {
        gBalloons[balloonIdx].bottom += gBalloons[balloonIdx].speed;

        elBalloon.style.bottom = gBalloons[balloonIdx].bottom + 'px';
        // CR: model is the calculator
        // console.log(JSON.stringify(gBalloons));
        if (gBalloons[balloonIdx].bottom >= HEIGHT_LIMIT) {
            clearInterval(interval);
            // console.log(gBalloons);
        }
    }, 200);
}

function popBalloon(elBalloon) {
    var popSound = new Audio('sound/xppop.mp3');
    popSound.play();
    elBalloon.style.opacity = 0;
}