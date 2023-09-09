


// const backtoTop = document.querySelector('.back');

// window.addEventListener('scroll',()=>{
//     if(window.pageYOffset > 100){
//         backtoTop.classList.add('active')
//     }else{
//         backtoTop.classList.remove('active')
//     }
// })






const back = document.querySelector('.back');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100){
        back.classList.add('active')
    }else{
        back.classList.remove('active')
    }
})




