
// footer codings //
const body = document.body;
const foot = document.createElement("footer");
    foot.style.backgroundColor = "#333";

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");

copyright.innerHTML = `Kyle Hartman ${thisYear}`;
    foot.appendChild(copyright);
    body.appendChild(foot);

const footer = document.querySelector("footer");

// skill array //

const skills = ["JavaScript", "HTML", "GitHub", "CSS", "Photoshop"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skill.classList.add("each-skill");
    skillsList.appendChild(skill);
}
