let nav = document.querySelector('.navMobile');

document.querySelector('.fa-bars').addEventListener('click', ()=>{
    nav.classList.add('activeNav')

});


document.querySelector('.fa-times').addEventListener('click', ()=>{
    nav.classList.remove('activeNav')

});