var Button = document.getElementById("topBtn");
var NavBar = document.getElementById("nav_bar");
var Sticky = NavBar.offsetTop;

window.onscroll = function() {detect_scroll()};

function detect_scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        Button.style.display = "inline-block";
    } else {
        Button.style.display = "none";
    }
    if (window.pageYOffset >= Sticky) {
        NavBar.classList.add("Sticky");
    } else {
        NavBar.classList.remove("Sticky");
    }
}

function return_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

