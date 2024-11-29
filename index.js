let bgclr=document.querySelector('*');
let title=document.querySelector('.title');
let input=document.querySelector('input');
let btn= document.querySelector('.btn');
let clr=document.querySelector('.clr');

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    bgclr.style.background=color;
    title.innerText=color;
    input.placeholder="Generated color is "+color;
  }

  function clear(){
    bgclr.style.background='white';
    title.innerText="Generate a color";
    input.placeholder="Generate a color ";

  }


btn.addEventListener('click',getRandomColor);
clr.addEventListener('click',clear);

