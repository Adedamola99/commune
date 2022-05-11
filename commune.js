var mobileBtn = document.getElementById("mobileBtn");

// if there is only one, let's use an Id here
// otherwise we might get the wrong element (in case there will be more <ul>s later)
// hint: you might have to update some css, I have only looked at the menu toggle function
var mainMenuUl = document.getElementById("mainMenu");

// we won't need this. let's just use classes to manage state
// that way we keep DOM problems inside the DOM
// var plusExit = true

function toggleMainMenu()
{
    // you can use `classList.toggle()` to toggle an element
    // as a bonus, it will directly return the new state
    // hint: you might have to update some css, I have only looked at the menu toggle function
    const isMenuVisibleNow = mainMenuUl.classList.toggle("visible");

    /* 
        this is a UI issue and should be dealt with via CSS
        task: change your code so that you can handle this with CSS 
              based on the fact of whether the mainMenu is currently toggled (visible) or not
        hint: you might have to pull the class state up some nodes (e.g. onto the <body> element, using maybe a 'main-menu-visible' name)
    */
    mobileBtn.setAttribute("src", isMenuVisibleNow ? "./Assets/exit.svg" : "./Assets/Hamburger Menu.svg");
}

mobileBtn.addEventListener("click", toggleMainMenu);