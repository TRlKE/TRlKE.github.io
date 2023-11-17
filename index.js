
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const bench = document.querySelector('#bench')
const deadlift = document.querySelector('#deadlift')
const squat = document.querySelector('#squat')
const bodyweight = document.querySelector('#bodyweight')
const BDScore = document.querySelector('#BDScore')

function BDSonchange() {
    BDScore.innerHTML = ((Number(bench.value) + Number(deadlift.value) + Number(squat.value)) / 3) / Number(bodyweight.value)
}

bench.onchange = ()=>{BDSonchange()}
deadlift.onchange = ()=>{BDSonchange()}
squat.onchange = ()=>{BDSonchange()}
bodyweight.onchange = ()=>{BDSonchange()}

