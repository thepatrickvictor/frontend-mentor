const ratingState = document.querySelector('.ratingState');
const thankYouState = document.querySelector('.thankYouState');
const submitButton = document.querySelector('.btn');
let rated = document.querySelector('.ratedNumber');
const rateButtons = document.querySelectorAll('.numbers')
let rate = 0



submitButton.addEventListener('click', rateChanger)
function rateChanger (){
    if (rate===0) {
        alert('Please give us a rating')
    }
    else {
        rate.innerHTML = rate;
        ratingState.style.display = 'none';
        thankYouState.style.display = 'block';
    }
}
