const password = document.getElementById("password");
const toggle = document.getElementById("toggle");
const generate = document.getElementById("generate");
const theme = document.getElementById("theme");

const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const entropyText = document.getElementById("entropy");

password.addEventListener("input", checkPassword);

function checkPassword() {
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
updateEntropy(value);
}

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

function updateEntropy(value) {
const charset =
(/[a-z]/.test(value) ? 26 : 0) +
(/[A-Z]/.test(value) ? 26 : 0) +
(/[0-9]/.test(value) ? 10 : 0) +
(/[^A-Za-z0-9]/.test(value) ? 32 : 0);

const entropy = Math.round(value.length * Math.log2(charset || 1));
entropyText.textContent = "Entropy Score: " + entropy + " bits";
}

toggle.addEventListener("click", () => {
password.type = password.type === "password" ? "text" : "password";
});

generate.addEventListener("click", () => {
const chars =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
let newPass = "";

for (let i = 0; i < 12; i++) {
newPass += chars[Math.floor(Math.random() * chars.length)];
}

password.value = newPass;
checkPassword();
});

theme.addEventListener("click", () => {
document.body.classList.toggle("light-mode");
});
