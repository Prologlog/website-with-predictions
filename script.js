let timer = document.querySelector('#timer');
let text  = document.querySelector('#text');
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let texts = [
    'Мама будет довольна',
    'Сегодня будет хорошая погода',
    'Сегодня вас ожидает неприятность',
    'Сегодня пойдет снег',
    'У вас сегодня будет плохое настроение',
    'В этот день ожидайте сюрпризы',
    'Вы встретитесь с незнакомцем',
    'Сегодня у вас выходной',
    'У вас будет хороший сон',
    'Сегодня изменится ваша жизнь',
    'Вы сможите сделать все что хотели сделать',
    'У вас будет хорошое настроение'
];
let random
let timerId;
start.addEventListener('click', func)
function func() { 
    timerId = setInterval(function() {
        timer.textContent = random 
        random = Randomnum(1, texts.length);
    }, 100);
};

stop.addEventListener('click', func2)
function func2() {
    clearInterval(timerId);    
    text.textContent = texts[random - 1];
    if(random % 2 ===0){
        text.style.color = 'green'
    }
    else{
        text.style.color = 'red'
    }
};

function Randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
