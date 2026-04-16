const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {
const value = password.value;
let score = 0;

if (value.length >= 8) score++;
if (/[A-Z]/.test(value)) score++;
if (/[a-z]/.test(value)) score++;
if (/[0-9]/.test(value)) score++;
if (/[^A-Za-z0-9]/.test(value)) score++;

updateRule("length", value.length >= 8);
updateRule("uppercase", /[A-Z]/.test(value));
updateRule("lowercase", /[a-z]/.test(value));
updateRule("number", /[0-9]/.test(value));
updateRule("special", /[^A-Za-z0-9]/.test(value));

updateStrength(score);
});

function updateRule(id, valid) {
document.getElementById(id).style.color = valid ? "#00ffcc" : "#ff4d4d";
}

function updateStrength(score) {
const percent = (score / 5) * 100;
strengthBar.style.width = percent + "%";

if (score <= 2) {
strengthBar.style.background = "#ff4d4d";
strengthText.textContent = "Weak";
}
else if (score <= 4) {
strengthBar.style.background = "#ffaa00";
strengthText.textContent = "Medium";
}
else {
strengthBar.style.background = "#00ff99";
strengthText.textContent = "Strong";
}
}
