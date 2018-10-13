// 54. Airline 
// • Build a data structure for an airline: 
//     i. plane 
//         1. model 
//         2. seatCount 
//     ii. passenger 
//         1. id (7 digits random number) 
//         2. fullName 
//         3. flights (array of pointers to the relevant flights) 
//     iii. flight 
//         1. at (date) 
//         2. src (origin airport) 
//         3. dest  
//         4. plane  (pointer to a plane) 
//         5. passengers (array of pointers to the relevant passengers) 
// • Initialize with consistent data (data that makes sense): 
//     • Create an array with 5 passengers (gPassengers is a good name) 
//     • Create an array of 2 planes 
//     • Create an array with 2 flights, each flight has a plane property that points to a plane object,
//       and an array of pointers to passengers 
// TIP: first create a passenger with an empty flights array, 
//      and the flight with an empty passengers array, then you can push the objects. 

// • Write the functions: 
//     i. isFlightFullyBooked(flight) 
//     ii. getFrequentFlyers () – returns the passengers with maximal flights count 

console.log('Ex 54 Solution');

// debugger;

var mat = [
    {
        id: function () {
            return Math.floor(Math.random() * (10000000 - 1000000)) + 1000000;
        },
        fullName: 'Alef One',
        flights: []
    },
    {
        id: function () {
            return Math.floor(Math.random() * (10000000 - 1000000)) + 1000000;
        },
        fullName: 'Bet Two',
        flights: []
    },
    {
        id: function () {
            return Math.floor(Math.random() * (10000000 - 1000000)) + 1000000;
        },
        fullName: 'Gimel Three',
        flights: []
    },
    {
        id: function () {
            return Math.floor(Math.random() * (10000000 - 1000000)) + 1000000;
        },
        fullName: 'Dalet Four',
        flights: []
    },
    {
        id: function () {
            return Math.floor(Math.random() * (10000000 - 1000000)) + 1000000;
        },
        fullName: 'High Five',
        flights: []
    }
];

var gPlanes = [
    {
        model: '747',
        seatCount: 3
    },
    {
        model: '737',
        seatCount: 2
    }
];

var gFlights = [
    {
        at: '7.9.18',
        src: 'Amsterdam',
        dest: 'Berlin',
        plane: gPlanes[0],
        passengers: [mat[0], mat[1], mat[4]]
    },
    {
        at: '7.10.18',
        src: 'Berlin',
        dest: 'Amsterdam',
        plane: gPlanes[1],
        passengers: [mat[1], mat[2], mat[4]]
    }
];

fillFlights(mat[0] , gFlights[0]);
fillFlights(mat[0] , gFlights[1]);
fillFlights(mat[1] , gFlights[0]);
fillFlights(mat[2] , gFlights[1]);
fillFlights(mat[4] , gFlights[0]);
fillFlights(mat[4] , gFlights[1]);


console.log('The frequent flyers: ', getFrequentFlyers());
console.log('is fly 0 is fully booked? ' , isFlightFullyBooked(gFlights[0]));

function getFrequentFlyers() {
    var frequentFlyers = [];
    var maxNumOfFlights = 0;
    for (var i = 0; i < mat.length; i++) {
        var currPassenger = mat[i];
        if (currPassenger.flights.length === maxNumOfFlights) {
            frequentFlyers.push(currPassenger);
        }
        if (currPassenger.flights.length > maxNumOfFlights) {
            maxNumOfFlights = currPassenger.flights.length;
            frequentFlyers = [currPassenger];
        }
    }
    return frequentFlyers;
}

function isFlightFullyBooked(flight) {
    return (flight.passengers.length >= flight.plane.seatCount);
}

function fillFlights(passenger , flight) {
    flight.passengers.push(passenger);
    passenger.flights.push(flight);
}

// function createPlane(id, model, seatCount) {
//     1
//     var plane = {
//         id: id,
//         model: model,
//         seatCount: seatCount
//     };
//     airline.planes.push(plane);
// }

// function createPassenger(fullName, flights) {
//     var passenger = {
//         id: function () {
//             return Math.floor(Math.random(10000000) * 10000000 - 1000000);
//         },
//         fullName: function () {
//             return prompt('Enter passenger name:');
//         },
//         flights: flights
//     };
//     gPassengers.push(passenger);
// }

// function createFlight(date, src, dest, plane, passengers) {
//     var passenger = {
//         at: date,
//         src: src,
//         dest: dest,
//         plane: plane,
//         passengers: passengers
//     };
//     airline.passengers.push(passenger);
// }
