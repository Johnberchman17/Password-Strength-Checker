const password = document.getElementById("password");

password.addEventListener("input", () => {
const value = password.value;

checkRule("length", value.length >= 8);
checkRule("uppercase", /[A-Z]/.test(value));
checkRule("lowercase", /[a-z]/.test(value));
checkRule("number", /[0-9]/.test(value));
checkRule("special", /[^A-Za-z0-9]/.test(value));
});

function checkRule(id, condition) {
const element = document.getElementById(id);

if (condition) {
element.style.color = "green";
} else {
element.style.color = "red";
}
}
