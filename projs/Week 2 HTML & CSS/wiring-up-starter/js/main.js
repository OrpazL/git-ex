'use strict'

var isMark = false;

function mark(elBtn) {
    // Todo: change text in the button
    // TODO: mark all spans inside .box
    var elBoxSpans = document.querySelectorAll('.box span');
    console.log('elSpans: ', elBoxSpans)
    for (var i = 0; i < elBoxSpans.length; i++) {
        var elSpan = elBoxSpans[i];
        if (elSpan.classList.contains('mark')) {
            isMark = false;
            elSpan.classList.remove('mark');
            // elBtn.innerHTML = '<h2><span>Mark</span></h2>';
        }
        else {
            elSpan.classList.add('mark');
            // elBtn.innerHTML = '<h2><span>Un Mark</span></h2>';
            isMark = true;
        }
    }
    console.log(isMark);
    if (isMark) {
        elBtn.innerHTML = 'Un Mark';
        // console.log('changed to unmark , isMark: ', isMark);
    } else {
        elBtn.innerHTML = 'Mark';
        // console.log('changed to mark , isMark: ', isMark);
    }

}


function whenMouseOnImg(elImg) {
    // TODO: change the image
    elImg.src = 'img/ca.png';
}

function whenMouseOutImg(elImg) {
    // TODO: change the image
    elImg.src = 'img/ninja.png';
}

function imgClicked() {
    openModal();
    setTimeout(closeModal, 5000);

}

function changeHeader(txt) {
    // TODO: cange the text in the span inside the h2
    var elH2Span = document.querySelector('h2 span');
    elH2Span.innerText = txt.innerText; 
}

function handleKey(ev) {
    // TODO: close the modal if escape is pressed
    console.log('ev:', ev);
    if (ev.key === 'Escape') {
        closeModal();
    }

}

function openModal() {
    // Todo: show the modal and schedule its closing
    var elModal = document.querySelector('.modal');
    elModal.style.display = 'block';
    var elH2s = document.querySelectorAll('h2');
    var color = getRandomColor();
    for (var i = 0 ; i < elH2s.length ; i++) {
        elH2s[i].style.color = color;
    }

}

function closeModal() {
    // Todo: hide the modal
    var elModal = document.querySelector('.modal');

    elModal.style.display = 'none';
    var elH2s = document.querySelectorAll('h2');
    for (var i = 0 ; i < elH2s.length ; i++) {
        elH2s[i].style.color = 'black';
    }
}

function bless() {
    // Todo: update the modal content and use openModal
    var elModal = document.querySelector('.modal');
    elModal.innerHTML += 'You were blessed at curr-time';
    openModal(elModal);
    setTimeout(closeModal, 5000);

}


function getTime() {
    return new Date().toString().split(' ')[4];
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}