function darkMode(){
    let darkModeButtonElement = document.querySelector('.js-darkMode');
    if(darkModeButtonElement.innerText === 'Dark'){
        darkModeButtonElement.innerHTML = 'Light';
    }else{
        darkModeButtonElement.innerHTML = 'Dark';
    }
}