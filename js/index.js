
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

// handling messages //

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log("Name: ", usersName);
    console.log("Email: ", usersEmail);
    console.log("Message: ", usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>:
    <span>${usersMessage}</span>`;

    const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});

