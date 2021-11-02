const one = document.getElementById("number");
const two = document.getElementById("key");
const three = document.getElementById("code");
const four = document.getElementById("which");
const five = document.getElementById("location")
const six = document.getElementById("welcome")
const seven = document.getElementById("generator")

document.addEventListener("keydown", (event) => {
  one.textContent = `${event.which}`;
  two.textContent = `${event.key}`;
  three.textContent = `${event.code}`;
  four.textContent = `${event.which}`;
  five.textContent = `${event.location}`;
  six.style.display = "none";
  seven.style.display = "block"
});





