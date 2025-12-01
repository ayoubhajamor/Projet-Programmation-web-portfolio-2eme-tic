function hide() {
    for (let i = 0; i < arguments.length; i++)
        arguments[i].setAttribute("hidden", "");
}
function display() {
    for (let i = 0; i < arguments.length; i++)
        arguments[i].removeAttribute("hidden", "");
}

let projects = document.querySelector("#projects");
let experience = document.querySelector("#experience");

hide(projects, experience);
