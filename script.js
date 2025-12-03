function hide() {
    for (let i = 0; i < arguments.length; i++)
        arguments[i].classList.add("hidden");
}
function display() {
    for (let i = 0; i < arguments.length; i++)
        arguments[i].classList.remove("hidden");
}
function addClassToElm(elm, cls) {
    elm.classList.add(cls);
}
function removeClassFromElm(elm, cls) {
    elm.classList.remove(cls);
}

let home = document.querySelector("#home");

let projects = document.querySelector("#projects");

let experience = document.querySelector("#experience");



function switch_home_func() {
    hide(projects, experience);
    display(home);
    addClassToElm(switch_home, "switch_selected");
    removeClassFromElm(switch_projects, "switch_selected");
    removeClassFromElm(switch_experience, "switch_selected");
};
function switch_experience_func() {
    hide(projects, home);
    display(experience);
    addClassToElm(switch_experience, "switch_selected");
    removeClassFromElm(switch_projects, "switch_selected");
    removeClassFromElm(switch_home, "switch_selected");
};
function switch_projects_func() {
    hide(experience, home);
    display(projects);
    addClassToElm(switch_projects, "switch_selected");
    removeClassFromElm(switch_experience, "switch_selected");
    removeClassFromElm(switch_home, "switch_selected");
};


// Switch between home, experience and projects
let switch_home = document.querySelector("#switch_home");
let switch_experience = document.querySelector("#switch_experience");
let switch_projects = document.querySelector("#switch_projects");

switch_home.addEventListener("click", switch_home_func);
switch_experience.addEventListener("click", switch_experience_func);
switch_projects.addEventListener("click", switch_projects_func);


// START
switch_home_func();