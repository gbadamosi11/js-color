let green = document.querySelector('.box-1');

let red = document.querySelector('.box-2');

let yellow = document.querySelector('.box-3');

let gray = document.querySelector('.box-4');

let blue = document.querySelector('.box-5');

let colorBox = document.querySelector('.color-box');

let reset = document.querySelector('.reset');


green.addEventListener('click',function(){
   colorBox.style.backgroundColor = 'green';
   if(green.style.backgroundColor = 'green'){} 
   if(red.style.backgroundColor = 'red'){}
   if(yellow.style.backgroundColor = 'yellow'){}
   if(gray.style.backgroundColor = 'lightgray'){}
   if(blue.style.backgroundColor = 'blue'){}
}),

red.addEventListener('click',function(){
    colorBox.style.backgroundColor = 'red';
    if(green.style.backgroundColor = 'red'){}
    if(red.style.backgroundColor = 'green'){}
    if(yellow.style.backgroundColor = 'yellow'){}
    if(gray.style.backgroundColor = 'lightgray'){}
    if(blue.style.backgroundColor = 'blue'){}
}),


yellow.addEventListener('click',function(){
    colorBox.style.backgroundColor = 'yellow';  
    if(green.style.backgroundColor = 'yellow'){}
    if(red.style.backgroundColor = 'green'){}
    if(yellow.style.backgroundColor = 'red'){}
    if(gray.style.backgroundColor = 'lightgray'){}
    if(blue.style.backgroundColor = 'blue'){}
});

gray.addEventListener('click',function(){
    colorBox.style.backgroundColor = 'lightgray';
    if(green.style.backgroundColor = 'lightgray'){}
    if(red.style.backgroundColor = 'green'){}
    if(yellow.style.backgroundColor = 'red'){}
    if(gray.style.backgroundColor = 'yellow'){}
    if(blue.style.backgroundColor = 'blue'){}
});

blue.addEventListener('click',function(){
    colorBox.style.backgroundColor = 'blue';
    if(green.style.backgroundColor = 'blue'){}
    if(red.style.backgroundColor = 'green'){}
    if(yellow.style.backgroundColor = 'red'){}
    if(gray.style.backgroundColor = 'yellow'){}
    if(blue.style.backgroundColor = 'lightgray'){}
});

reset.addEventListener('click',function(){
    colorBox.style.backgroundColor = 'black';
    if(green.style.backgroundColor = 'green'){} 
    if(red.style.backgroundColor = 'red'){}
    if(yellow.style.backgroundColor = 'yellow'){}
    if(gray.style.backgroundColor = 'lightgray'){}
    if(blue.style.backgroundColor = 'blue'){}
 }) 
 