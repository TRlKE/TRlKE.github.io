
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const bench = document.querySelector('#bench')
const deadlift = document.querySelector('#deadlift')
const squat = document.querySelector('#squat')
const bodyweight = document.querySelector('#bodyweight')
const BDScore = document.querySelector('#BDScore')
const submitBtn = document.querySelector('#submitBtn')
const errorSubmit = document.querySelector('#errorSubmit')

function BDSonchange() {
    BDScore.innerHTML = ((Number(bench.value) + Number(deadlift.value) + Number(squat.value)) / 3) / Number(bodyweight.value)
}

bench.onchange = ()=>{BDSonchange()}
deadlift.onchange = ()=>{BDSonchange()}
squat.onchange = ()=>{BDSonchange()}
bodyweight.onchange = ()=>{BDSonchange()}

submitBtn.addEventListener('click', ()=> {
    errorSubmit.innerHTML = ''
    if (!firstName.value) {
        errorSubmit.innerHTML += 'type in a first name <br>'
    } if (!lastName.value) {
        errorSubmit.innerHTML += 'type in a last name <br>'
    } if ((isNaN(Number(bench.value))) || !bench.value) {
        errorSubmit.innerHTML += 'Bench can only be a number <br>'
    } if ((isNaN(Number(deadlift.value))) || !deadlift.value) {
        errorSubmit.innerHTML += 'Deadlift can only be a number <br>'
    } if ((isNaN(Number(squat.value))) || !squat.value) {
        errorSubmit.innerHTML += 'Squat can only be a number <br>'
    } if ((isNaN(Number(bodyweight.value))) || !bodyweight.value) {
        errorSubmit.innerHTML += 'Bodyweight can only be a number <br>'
    } else {
        console.log('everything is correct')
    }
})