
// NAVBAR SCROLLED **************************************
let navBar = document.querySelector (`#nav-bar`);
window.addEventListener(`scroll`, () => {
    if(this.scrollY >= 70){
        navBar.classList.add('scrolled')
    } else{
        navBar.classList.remove('scrolled')
    }
})



// MENU-ICON **************************************
let menu = document.querySelector(`#menu-icon i`);
let navList = document.querySelector (`.nav_list`);

menu.onclick = () =>{
    menu.classList.toggle (`bx-x`);
    navList.classList.toggle (`show`);
}
