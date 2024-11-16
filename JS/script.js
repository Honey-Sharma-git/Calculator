function darkMode(){
    let darkModeButtonElement = document.querySelector('.js-darkMode');
    if(darkModeButtonElement.innerText === 'Dark'){
        darkModeButtonElement.innerHTML = 'Light';
        document.querySelector('.js-mainBg').classList.add('mainBg-dark');
        document.querySelector('.js-output').classList.add('mainBg-dark');
    }else{
        darkModeButtonElement.innerHTML = 'Dark';
        document.querySelector('.js-mainBg').classList.remove('mainBg-dark');
        document.querySelector('.js-output').classList.remove('mainBg-dark');
    }
}
let calculation = '';
function calc(value){
   calculation += value;
  
}
function displayOutput(){
    document.querySelector('.js-output').innerHTML = calculation;
}
