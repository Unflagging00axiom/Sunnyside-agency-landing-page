function toogleMenu(){
    const navList = document.querySelector(".nav__list");
    console.log(navList.style)
    navList.classList.toggle("active")
    // navList.style.display = (getComputedStyle(navList).display === "none" || navList.style.display === '') ? 'flex' : 'none';
}
