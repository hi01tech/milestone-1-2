const toggleButton =document.getElementById("toggle-skills") as HTMLButtonElement
const skills = document.getElementById("skills") as HTMLElement

toggleButton.addEventListener("click" , ()=> {
    if (skills.style.display === "none"){
        skills.style.display ="block"
    } else {
        skills.style.display = "none"
    }
});

const education =document.getElementById("toggle-education") as HTMLButtonElement
const edu = document.getElementById("education") as HTMLElement

education.addEventListener("click" , ()=> {
    if (edu.style.display === "none"){
        edu.style.display ="block"
    } else {
        edu.style.display = "none"
    }
});



