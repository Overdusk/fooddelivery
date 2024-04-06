let heartIcon = document.querySelector('#heartIcon');
heartIcon.addEventListener('click', () => {
    if(heartIcon.classList.value == 'bi bi-heart')
    {
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
    }
    else{
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
    }
});

let counter = document.querySelector('#counter');
let counterVal = parseInt(counter.textContent);
let plusCircle = document.querySelector('#plusCircle');
let minusCircle = document.querySelector('#minusCircle');
const addCounter = () => {
    counterVal++;
    counter.innerHTML= counterVal;
    checkCounterVal(counterVal);
}
const reduceCounter = () => {
    counterVal--;
    counter.innerHTML= counterVal;
    checkCounterVal(counterVal);
}
const checkCounterVal = (counterVal) => {
    if(counterVal == 0)
    {
        minusCircle.removeEventListener('click', reduceCounter);
    }else if(counterVal == 100)
    {
        plusCircle.removeEventListener('click', addCounter);
    }
}
plusCircle.addEventListener('click', addCounter);
minusCircle.addEventListener('click',reduceCounter);