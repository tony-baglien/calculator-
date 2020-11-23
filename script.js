// grab output screen
var output = document.querySelector('.screen-content')
var digits = document.querySelectorAll('.cell');
var clear = document.querySelector('#clear');
var enter = document.querySelector('#enter')
const outputArray = []
//Text box length
const maxLength = 9;


//Listeners
//----------------------------------
//input numpad
var blinkVar = setInterval(blink,500)
for(let i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', (e) => {
            clearInterval(blinkVar)
            output.classList.add('screen-content');
            output.classList.remove('strokeme')
        if(outputArray.length === maxLength){
            fullError();
        } else{
            outputArray.push(e.target.innerText)
            output.innerText =  outputArray.join('')
        }})
};

clear.addEventListener('click',clrButton)

enter.addEventListener('click',function(){
    let mathStr = output.innerText;
    clrButton();
    const regex = /^(\d+)([-+*/])(\d)$/
    const match = mathStr.match(regex);
    doMath(match[1],match[2],match[3])
})


//functions
function blink(){
    if(!output.classList.contains('strokeme')){
        output.classList.add('strokeme')
    } else{
        output.classList.remove('strokeme')
    }}

function clrButton(){
    outputArray.length = 0;
    output.innerText = outputArray
}

function doMath(ob1,mod,ob2){
    const num1 = parseFloat(ob1);
    const num2 = parseFloat(ob2);
    switch(mod){
        case '+':
            output.innerText = num1 + num2;
            break;
        case '-':
            output.innerText = num1 - num2;
            break;
        case '*':
            output.innerText = num1*num2;
            break
        case '/':
            if(num2 === 0){
                output.innerText = "Divide by Zero Error!"
            }else{
                output.innerText = num1/num2;
    }}
}

function fullError(){
        output.innerText = "Overflow!"
        blink();
    }






