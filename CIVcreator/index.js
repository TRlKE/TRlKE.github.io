
const foodBtn = document.getElementById('foodBtn');
const woodBtn = document.getElementById('woodBtn');
const stoneBtn = document.getElementById('stoneBtn');
const houseBtn = document.getElementById('houseBtn');
let food = 0;
let wood = 0;
let stone = 0;
let houses = 0;
let foodPerSec = 0;
let woodPerSec = 0;
let stonePerSec = 0;
let population = 0;
let maxpopulation = 0;
let populationRound = 0;
let peoplePerHouse = 2;
let year = 0;
let idleWorkers = 0;
let working = 0;
let farmers = 0;
let lumberjacks = 0;
let miners = 0;
let message1 = document.getElementById('message1');
let message2 = document.getElementById('message2');
let message3 = document.getElementById('message3');
let message4 = document.getElementById('message4');
let message5 = document.getElementById('message5');
let beginning = true;
const buildingTab = document.getElementById('buildingTab');
const hireTab = document.getElementById('rightColumn');
let house = {
    wood: 50,
    stone: 20
}

check('houseBtn');

let civName = prompt("What will be the name of your civilisation?")
let creater = prompt("Your name?")
document.getElementById("civName").innerHTML = civName
document.getElementById("creater").innerHTML = creater

function message(msg) {
    message5.innerHTML = message4.innerHTML
    message4.innerHTML = message3.innerHTML
    message3.innerHTML = message2.innerHTML
    message2.innerHTML = message1.innerHTML
    message1.innerHTML = msg
}

function clicked(material) {
    if (beginning == true) { // starting sequence
        beginning = false;
        message('Hello!, this is your village but noone lives here');
        setTimeout(() => {
            message('Try collecting some wood and stone and make a house');
            buildingTab.style.visibility = 'visible';
        }, 4000);
    }
    if (material == 'food') {
        food++;
    }
    if (material == 'wood') {
        wood++;
    }
    if (material == 'stone') {
        stone++;
    }
    change('food');
    change('wood');
    change('stone');
    check('houseBtn');
    change('maxHouseBtn');
}

function building(building) {

    if (building == 'house' || building == 'maxHouseBtn') {
        if (houses < 1) { // starting sequence
            message('Good work, you should be expecting some settlers rrrrright...');
            setTimeout(() => {
                message("now, 2 settlers have come. Make more houses and you can assign these people into jobs.");
                hireTab.style.visibility = 'visible';
                population = 2
                change('maxPopulation')
                change('population')
                change('idleWorkers')
                setTimeout(() => {
                    message('Good luck')
                }, 4000)
            }, 3000);
        }
    }

    if (building == 'house' && wood >= house.wood && stone >= house.stone) {
        houses++;
        wood = wood - house.wood;
        stone = stone - house.stone;

    }
    if (building = 'maxHouseBtn') {
        if ((Math.floor(wood / house.wood)) > (Math.floor(stone / house.stone))) {
            houses = houses + Math.floor(stone / house.stone);
            wood = wood - (house.wood * Math.floor(stone / house.stone));
            stone = stone - (house.stone * Math.floor(stone / house.stone));
        } else {
            houses = houses + Math.floor(wood / house.wood);
            stone = stone - (house.stone * Math.floor(wood / house.wood));
            wood = wood - (house.wood * Math.floor(wood / house.wood));
        }
    }
    check('houseBtn');
    change('maxHouseBtn');
    change('house');
    change('wood');
    change('stone');
    change('maxPopulation');
}

//Assigning jobs

function hire(job, amount) {
    if (job == 'miner') {
        var amountOfMiner = Number(document.getElementById('amountOfMiner').value);
        if (amount == '+' || amount == '++') {
            if (amountOfMiner > idleWorkers || amount == '++') {
                miners = miners + idleWorkers;
                working = working + idleWorkers;
                idleWorkers = 0;
            } else {
                miners = miners + amountOfMiner;
                working = working + amountOfMiner;
                idleWorkers = idleWorkers - amountOfMiner;
            }
        } else {
            if (amountOfMiner > miners || amount == '--') {
                idleWorkers = idleWorkers + miners;
                working = working - miners;
                miners = 0;
            } else {
                idleWorkers = idleWorkers + amountOfMiner;
                working = working - amountOfMiner;
                miners = miners - amountOfMiner;
            }
        }
    }
    if (job == 'lumberjack') {
        var amountOfLumberjack = Number(document.getElementById('amountOfLumberjack').value);
        if (amount == '+' || amount == '++') {
            if (amountOfLumberjack > idleWorkers || amount == '++') {
                lumberjacks = lumberjacks + idleWorkers;
                working = working + idleWorkers;
                idleWorkers = 0;
            } else {
                lumberjacks = lumberjacks + amountOfLumberjack;
                working = working + amountOfLumberjack;
                idleWorkers = idleWorkers - amountOfLumberjack;
            }
        } else {
            if (amountOfLumberjack > lumberjacks || amount == '--') {
                idleWorkers = idleWorkers + lumberjacks;
                working = working - lumberjacks;
                lumberjacks = 0;
            } else {
                idleWorkers = idleWorkers + amountOfLumberjack;
                working = working - amountOfLumberjack;
                lumberjacks = lumberjacks - amountOfLumberjack;
            }
        }
    }
    if (job == 'farmer') {
        var amountOfFarmers = Number(document.getElementById('amountOfFarmer').value);
        if (amount == '+' || amount == '++') {
            if (amountOfFarmers > idleWorkers || amount == '++') {
                farmers = farmers + idleWorkers;
                working = working + idleWorkers;
                idleWorkers = 0;
            } else {
                farmers = farmers + amountOfFarmers;
                working = working + amountOfFarmers;
                idleWorkers = idleWorkers - amountOfFarmers;
            }
        } else {
            if (amountOfFarmers > farmers || amount == '--') {
                idleWorkers = idleWorkers + farmers;
                working = working - farmers;
                farmers = 0;
            } else {
                idleWorkers = idleWorkers + amountOfFarmers;
                working = working - amountOfFarmers;
                farmers = farmers - amountOfFarmers;
            }
        }
    }
    foodPerSec = farmers;
    woodPerSec = (lumberjacks) / 2;
    stonePerSec = (miners) / 4;
    change('idleWorkers');
    change('farmers');
    change('lumberjacks');
    change('miners');
    change('working');
}

setInterval(function() {
    if (maxpopulation > population) {
        population = population * 1.01;
        change('maxPopulation');
        change('population');
        change('idleWorkers');
        change('working');
    }
    food = food + foodPerSec / 10;
    wood = wood + (woodPerSec / 10);
    stone = stone + (stonePerSec / 10);
    year = year + 0.05;
    change('food');
    change('wood');
    change('stone');
    change('year');
}, 100);

function change(item) {
    // compact changes
    //Resources
    if(item == 'food') {
        document.getElementById(item).innerHTML = Math.floor(food);
    }
    if(item == 'wood') {
        document.getElementById(item).innerHTML = Math.floor(wood);
    }
    if(item == 'stone') {
        document.getElementById(item).innerHTML = Math.floor(stone);
    }

    //Building

    if (item == 'house') {
        if (houses > 1 || houses == 0) {
            document.getElementById(item).innerHTML = houses + ' houses';
        } else {
            document.getElementById(item).innerHTML = houses + ' house';
        }
    }
    if (item == 'maxHouseBtn') {
        if ((Math.floor(wood / house.wood)) > (Math.floor(stone / house.stone))) {
            document.getElementById('maxHouseBtn').innerHTML = 'MaxHouses: ' + Math.floor(stone / house.stone);
        } else {
            document.getElementById('maxHouseBtn').innerHTML = 'MaxHouses: ' + Math.floor(wood / house.wood);
        }
    }

    //Population

    if (item == 'population') {
        populationRound = Math.floor(population)
        document.getElementById(item).innerHTML = populationRound;
    }
    if (item == 'maxPopulation') {
        maxpopulation = houses * peoplePerHouse;
        document.getElementById(item).innerHTML = maxpopulation;
    }
    if (item == 'working') {
        working = populationRound - idleWorkers;
        document.getElementById('working').innerHTML = working;
    }
    if (item == 'idleWorkers') {
        idleWorkers = populationRound - working;
        document.getElementById('idleWorkers').innerHTML = idleWorkers;
    }

    //Jobs
    if (item == 'farmers') {
        document.getElementById('farmers').innerHTML = farmers;
    }
    if (item == 'lumberjacks') {
        document.getElementById('lumberjacks').innerHTML = lumberjacks;
    }
    if (item == 'miners') {
        document.getElementById('miners').innerHTML = miners;
    }

    //Year

    if (item == 'year') {
        document.getElementById(item).innerHTML = Math.floor(year)
    }
}

function check(item) {
    if (item == 'houseBtn') {
        if (wood < house.wood || stone < house.stone) {
            document.getElementById(item).disabled = true;
            document.getElementById('maxHouseBtn').disabled = true;
        } else {
            document.getElementById(item).disabled = false;
            document.getElementById('maxHouseBtn').disabled = false;
        }
    }
}