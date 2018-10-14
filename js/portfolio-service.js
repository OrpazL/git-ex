var gProjs = [];

function createProjs(proj) {
    gProjs = [
        createProj('Minesweeper' , 'Game' , 'Flag those mines!' , 'projs/Sprint 1/Sep27 8pm Final Delivery', '27/09/2018', ['Matrixes' , 'Mouse events']) , 
        createProj('In-picture' , 'Game' , 'Describe the pic' , 'projs/Week 2 HTML & CSS/in-picture' , '20/09/2018' , ['Pictures']),
        createProj('Touch Nums' , 'Game', 'Click the next num fastest U can!', '/projs/Week 2 HTML & CSS/touch-nums', '17/09/2018' , ['Matrixes'])


    ];
}

function createProj(projName, projTitle, projDesc, projUrl, projPublish, projLabels) {
    return {
        id: makeId(),
        name: projName,
        title: projTitle,
        desc: projDesc,
        url: projUrl,
        published: projPublish,
        labels: projLabels
    };
}
function getProjs(){
    return gProjs;
}