let nav = document.querySelector('.navMobile');
let increament = document.querySelector('.increament');
let decreament = document.querySelector('.decreament');
let numberPrice = document.querySelector('.numberPrice');
let ethPrice = document.querySelector('.ethPrice');
document.querySelector('.burger').addEventListener('click', ()=>{
    nav.classList.add('activeNav');

});


document.querySelector('.fa-times').addEventListener('click', ()=>{
    nav.classList.remove('activeNav');

});

let x = 1;


increament.addEventListener('click', () =>{
    
    numberPrice.innerHTML = ++x;
    ethPrice.innerHTML = numberPrice.innerHTML;
})



decreament.addEventListener('click', () =>{
if(x>=1){
    numberPrice.innerHTML = --x;
    ethPrice.innerHTML = numberPrice.innerHTML;
}



else{
    console.log('asd')
}
    
    


    
})

