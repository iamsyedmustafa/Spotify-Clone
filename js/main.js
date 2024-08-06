// Navbar toggle button
function toggleNavbarButton(element) {
    element.classList.toggle("active");
    const sideNav = document.getElementById("sideNav");
    const overlay = document.getElementById("overlay");
    sideNav.classList.toggle("visible");
    overlay.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
}

// Profile button
function toggleProfileMenu() {
    const profileMenu = document.getElementById("profileDropdown");
    profileMenu.classList.toggle("expanded");
    const icon = document.querySelector(".profile-icon svg");
    icon.classList.toggle("rotate");
}
