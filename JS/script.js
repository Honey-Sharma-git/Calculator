function darkMode(){
    let darkModeButtonElement = document.querySelector('.js-darkMode');
    if(darkModeButtonElement.innerText === 'Dark'){
        darkModeButtonElement.innerHTML = 'Light';
        document.querySelector('.js-mainBg').classList.add('mainBg-dark');
        document.querySelector('.js-output').classList.add('mainBg-dark');
        document.querySelectorAll('.js-greenOnGreyBg').forEach(button =>{button.classList.add('greenOnGreyBg-dark')});
        document.querySelectorAll('.js-blackOnWhiteBg').forEach(button =>{button.classList.add('blackOnWhiteBg-dark')});
        document.querySelectorAll('.js-redOnGrey').forEach(button =>{button.classList.add('redOnGrey-dark')});
    }else{
        darkModeButtonElement.innerHTML = 'Dark';
        document.querySelector('.js-mainBg').classList.remove('mainBg-dark');
        document.querySelector('.js-output').classList.remove('mainBg-dark');
        document.querySelectorAll('.js-greenOnGreyBg').forEach(button =>{button.classList.remove('greenOnGreyBg-dark')});
        document.querySelectorAll('.js-blackOnWhiteBg').forEach(button =>{button.classList.remove('blackOnWhiteBg-dark')});
        document.querySelectorAll('.js-redOnGrey').forEach(button =>{button.classList.remove('redOnGrey-dark')});
    }
}
let calculation = '';
function calc(value){
   calculation += value;
  
}
function displayOutput(){
    document.querySelector('.js-output').innerHTML = calculation;
}
