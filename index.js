
let wood = 0;
let stone = 0;
let houses = 1
let housing = 2
let peoplePerHouse = 2
let population = 2
let populationRound = population
let year = 0
let idleWorkers = 2
let working = 0
let lumberjacks = 0
let miners = 0
let builders = 0
let woodPerSec = 0
let stonePerSec = 0
let housesPerSec = 0
let housesRound = 1

function clicked(material) {
    if (material == 1) {
        wood = wood + 1;
        document.getElementById("wood").innerHTML = wood + ' wood';
    } else {
        stone = stone + 1;
        document.getElementById("stone").innerHTML = stone + ' stone';
    }
}

function buildBuilding(building) {
    if (building == 1 && wood >= 10 && stone >= 5) {
        wood = wood - 10;
        document.getElementById("wood").innerHTML = wood + ' wood';
        stone = stone - 5;
        document.getElementById("stone").innerHTML = stone + ' stone';
        houses = houses + 1;
        housesRound++
        housing = houses * peoplePerHouse;
        document.getElementById("house").innerHTML = housesRound + ' houses';
        document.getElementById("housing").innerHTML = 'Housing: ' + housing;
    }
}

setInterval(function populationGrowth() {
    if (housing > population) {
        population = population * 1.05;
        populationRound = Math.round(population);
        document.getElementById("population").innerHTML = 'Population: ' + populationRound;
        idleWorkers = populationRound - working;
        document.getElementById("idleWorkers").innerHTML = "Idle Workers: " + idleWorkers;
    }
}, 1000);

setInterval(function date() {
    year++;
    document.getElementById("year").innerHTML = 'Year: ' + year;
}, 1000);

function hire(worker) {
    if (idleWorkers > 0) {
        idleWorkers = idleWorkers - 1;
        document.getElementById("idleWorkers").innerHTML = "Idle Workers: " + idleWorkers;
        working++;
        if (worker == 1) {
            lumberjacks++;
            document.getElementById('lumber').innerHTML = "Lumberjacks: " + lumberjacks;
            woodPerSec = woodPerSec + 0.5;
        }
        if (worker == 2) {
            miners++;
            document.getElementById('miner').innerHTML = "Miners: " + miners;
            stonePerSec = stonePerSec + 0.25;
        }
        if (worker == 3) {
            builders++;
            document.getElementById('builder').innerHTML = "Builders: " + builders;
            housesPerSec = housesPerSec + 0.1;
        }
    }
}

setInterval(function working() {
    wood = wood + woodPerSec;
    stone = stone + stonePerSec;
    houses = houses + housesPerSec;
    if (wood > housesPerSec * 10 && stone > housesPerSec * 5) {
        wood = wood - housesPerSec * 10;
        stone = stone - housesPerSec * 5;
        houses = houses + housesPerSec;
        housesRound = Math.round(houses);
        housing = housesRound * peoplePerHouse;
    }
    document.getElementById("wood").innerHTML = wood + ' wood';
    document.getElementById("stone").innerHTML = stone + ' stone';
    document.getElementById("house").innerHTML = housesRound + ' houses';
    document.getElementById("housing").innerHTML = 'Housing: ' + housing;
}, 1000);
