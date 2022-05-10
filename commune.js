var mobileBtn = document.getElementById("mobileBtn");
var ul = document.querySelector("ul");
var plusExit = true

mobileBtn.addEventListener("click", function() {
    if (plusExit) {
        var change = mobileBtn.setAttribute("src", "./Assets/exit.svg");
        ul.classList.add("menu");
        plusExit = false;
    } else {
        var change = mobileBtn.setAttribute("src", "./Assets/Hamburger Menu.svg");
        ul.classList.remove("menu");
        plusExit = true;
    }
});
