// Monsters
// o Create a monsters array with 4 monsters
// o Each monster should also have
// ▪ id – a unique sequential number
// ▪ name – read from user
// ▪ power (random 1-100)
// o Write the functions
// ▪ createMonster(name, power) – returns a new monster
// object, optionally getting name & power from the caller
// ▪ getMonsterById() - finds and returns a monster object
// by an id.
// ▪ deleteMonster(id) – removes the specified monster
// from the array
// ▪ updateMonster(id, newPower) – updates the specified
// monster, setting a new power
// o Write the function: findMostPowerful(monsters)
// o Write the function: breedMonsters(monster1, monster2)
// the function returns a new monster where power is an
// average, and name is a mix – half parent1, half parent2

console.log('Ex 52 Solution');

// var students = [
//     { id: 1, name: "miku", power: 10 },
//     { id: 2, name: "muki", power: 20 },
//     { id: 3, name: "cc", power: 30 },
//     { id: 4, name: "dd", power: 40 }
// ];
var gMonsterId = 1;
var numOfMonsters = 4;
// debugger;
// console.log('Monsters: ', JSON.stringify(monsters));
// console.log('Monsters: ', monsters);

// fillMonsters(numOfMonsters);
// deleteMonster(2);
// console.log(getMonsterById(3));
// updateMonster(3, 22);
console.log('Monsters: ', students);
console.log('Most Powerful: ' , findMostPowerful(students));
console.log(breedMonsters(getMonsterById(1), getMonsterById(2)));

function breedMonsters(monster1, monster2) {
    var name = monster1.name.slice(0,monster1.name.length/2)
             + monster2.name.slice(monster2.name.length/2 , monster2.name.length);
    var power = (monster1.power + monster2.power) / 2;
    var monster = createMonster(name , power);
    return monster;
}

function findMostPowerful(monsters) {
    var max = 0;
    var mostPowerful = null;
    for (var i = 0; i < monsters.length; i++) {
        var currMonster = monsters[i];
        if (currMonster.power > max) {
            max = currMonster.power;
            mostPowerful = currMonster;
        }
    }
    return mostPowerful;
}

function updateMonster(id, newPower) {
    var monster = getMonsterById(id);
    monster.power = newPower;
}

function deleteMonster(id) {
    students.splice(id, 1);
}

function getMonsterById(monsterId) {
    var monstersMap = {};
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === monsterId) return students[i];
    }
    return null;
}

function fillMonsters(numOfMonsters) {
    for (var i = 0; i < numOfMonsters; i++) {
        var name = prompt('Enter new monster\'s name:');
        var power = +prompt('Enter new monster\'s power: ');
        students.push(createMonster(name, power));
    }
}

function createMonster(name, power) {
    var monster = {
        id: gMonsterId++,
        name: name,
        power: power
    };
    return monster;
}