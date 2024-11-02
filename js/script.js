function helloWorld(name, email) {
    alert(`Hello, ${name}!\n${email}\n`);
}

helloWorld("GDG on Campus Sogang");

const helloBtn = document.getElementById("helloBtn");
const userName = document.getElementById("helloName");
const userEmail = document.getElementById("helloEmail");

helloBtn.addEventListener("click", () => {
    helloWorld(userName.value, userEmail.value);
});