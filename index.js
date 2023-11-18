
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const bench = document.querySelector('#bench')
const deadlift = document.querySelector('#deadlift')
const squat = document.querySelector('#squat')
const bodyweight = document.querySelector('#bodyweight')
const BDScore = document.querySelector('#BDScore')
const submitBtn = document.querySelector('#submitBtn')

function BDSonchange() {
    BDScore.innerHTML = ((Number(bench.value) + Number(deadlift.value) + Number(squat.value)) / 3) / Number(bodyweight.value)
}

firstName.onchange = ()=>{
    if (!firstName.value) {
        console.log('not right')
    }
}
bench.onchange = ()=>{BDSonchange()}
deadlift.onchange = ()=>{BDSonchange()}
squat.onchange = ()=>{BDSonchange()}
bodyweight.onchange = ()=>{BDSonchange()}

submitBtn.addEventListener('click', ()=> {
    if (!firstName.value) {
        console.log('type in a first name')
    } if (!lastName.value) {
        console.log('type in a last name')
    } if ((isNaN(Number(bench.value))) || !bench.value) {
        console.log('Bench can only be a number')
    } if ((isNaN(Number(deadlift.value))) || !deadlift.value) {
        console.log('Deadlift can only be a number')
    } if ((isNaN(Number(squat.value))) || !squat.value) {
        console.log('Squat can only be a number')
    } if ((isNaN(Number(bodyweight.value))) || !bodyweight.value) {
        console.log('Bodyweight can only be a number')
    } else {
        console.log('everything is correct')
    }
})
