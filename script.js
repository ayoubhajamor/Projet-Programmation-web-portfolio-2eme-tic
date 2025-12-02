function hide() {
    for (let i = 0; i < arguments.length; i++)
        arguments[i].style.display = "none";
}
function display(elm, type) {
    if (type == "home")
        elm.style.display = home_display_default;
    if (type == "projects") 
        elm.style.display = "flex";
    if (type == "experience")
        elm.style.display = "flex";
}
let home = document.querySelector("#home");
let home_display_default = "flex";

let projects = document.querySelector("#projects");
// TODO : fix this
let projects_display_default = projects.style.display;

let experience = document.querySelector("#experience");
// TODO : And this
let experience_display_default = experience.style.display;


hide(projects, experience);


// Switch between home, experience and projects
document.querySelector("#switch_home").addEventListener("click", () => {
    hide(projects, experience);
    display(home, "home");
});
document.querySelector("#switch_experience").addEventListener("click", () => {
    hide(projects, home);
    display(experience, "experience");
});

document.querySelector("#switch_projects").addEventListener("click", () => {
    hide(experience, home);
    display(projects, "projects");
});

