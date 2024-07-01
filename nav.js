// handle dropdown hamburger in compressed navbar

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("#nav-list");

function toggleDropdownNav() {
    const visibility = navBar.getAttribute("visibility");

    if (visibility === "false") {
        navBar.setAttribute("visibility", "true");
    } else {
        navBar.setAttribute("visibility", "false");
    } 
    navBar.setAttribute("transitioning", "true");
    navBar.addEventListener("transitionend", function() {
        navBar.setAttribute("transitioning", "false");
    });
}

hamburger.addEventListener("click", toggleDropdownNav);

// clear dropdown if screen is made larger

function clearDropdown() {
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth > 700) {
        navBar.setAttribute("visibility", "false");
    }
}

window.addEventListener("resize", clearDropdown);
