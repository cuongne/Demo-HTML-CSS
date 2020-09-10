function navFunction() {
    var navDropdownContent = document.querySelector('#nav .nav-dropdown-content');
    var navDropdownIcon = document.querySelector('#nav .angle-down .fa-angle-down');
    if (navDropdownContent.style.display === "none") {
        navDropdownContent.style.display = "block";
        navDropdownIcon.style.transform = "rotate(180deg)";
    } else {
        navDropdownContent.style.display = "none";
        navDropdownIcon.style.transform = "rotate(360deg)";
    }
}

function showNav() {
    var nav = document.getElementById("nav");
    nav.style.display = "block";
    // setTimeout(() => {
    //     nav.className = nav.className.replace("show","")
    // }, 2000);
}

function closeNav() {
    var nav = document.getElementById("nav");
    nav.style.display = "none";
}


function showShoppingCart() {
    var shoppingCart = document.getElementById("shopping-cart")
    shoppingCart.style.display = "flex";
}

function closeShoppingCart() {
    var shoppingCart = document.getElementById("shopping-cart");
    shoppingCart.style.display = "none";
}

function sideBar() {
    var idBar = document.getElementById('mySidenav');
    var idFilter = document.getElementById('animation-sidebar');
    var idClose = document.getElementById('closeNav');
    var backgoundBar = document.querySelector('#barClose');

    idFilter.addEventListener('click', openNav);
    idClose.addEventListener('click', closeSidebar)

    function openNav() {
        idFilter.style.opacity = "0";
        idClose.style.display = "block";
        backgoundBar.classList.add('close-background');
        idBar.style.transform = "translateX(0px)";
    }

    function closeSidebar() {
        idFilter.style.opacity = "1";
        idClose.style.display = "none";
        backgoundBar.classList.remove('close-background');
        idBar.style.transform = "translateX(-600px)";
    }
    window.onclick = function(event) {
        if (event.target == backgoundBar)
            closeSidebar();
    }
}
sideBar();