// For the hamburger function

const sideBar = document.querySelector('.sideBar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => { 
    sideBar.classList.toggle('open');
});


// For the icon and text 
const list = document.querySelectorAll('.list');

function activeList () {
     list.forEach((element) => 
    element.classList.remove('active'));
    this.classList.add('active');

}
 
list.forEach((element) =>
element.addEventListener('click', activeList));