let menu=document.querySelector('.burger');
let nav_menu=document.querySelector('.nav_menu');
    
    menu.onclick= () => {
        menu.classList.toggle('bx-x');
        nav_menu.classList.toggle('open');
    }