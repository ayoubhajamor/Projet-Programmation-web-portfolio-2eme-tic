function hide() {
    for (let i = 0; i < arguments.length; i++)
        arguments[i].classList.add("hidden");
}
function display() {
    for (let i = 0; i < arguments.length; i++)
        arguments[i].classList.remove("hidden");
}
let home = document.querySelector("#home");

let projects = document.querySelector("#projects");

let experience = document.querySelector("#experience");


hide(projects, experience);


// Switch between home, experience and projects
document.querySelector("#switch_home").addEventListener("click", () => {
    hide(projects, experience);
    display(home);
});
document.querySelector("#switch_experience").addEventListener("click", () => {
    hide(projects, home);
    display(experience);
});

document.querySelector("#switch_projects").addEventListener("click", () => {
    hide(experience, home);
    display(projects);
});

