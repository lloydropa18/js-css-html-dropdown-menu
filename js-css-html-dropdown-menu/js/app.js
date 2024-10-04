const dropdownButton = document.querySelector('#dropdown-button');
const dropdownList = document.querySelector('.nav-links-container');

dropdownButton.addEventListener('click', ()=> {
    dropdownList.classList.toggle('hidden');
})
