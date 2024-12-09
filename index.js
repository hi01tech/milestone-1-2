var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
var on = document.getElementById("toggle-education");
var edu = document.getElementById("education");
on.addEventListener("click", function () {
    if (edu.style.display === "none") {
        edu.style.display = "block";
    }
    else {
        edu.style.display = "none";
    }
});
