// script.js

// Update Time + Greeting
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  let greeting = "";
  if (hours < 12) {
    greeting = "Good Morning!";
  } else if (hours < 17) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  document.getElementById("currentTime").textContent = `${greeting} Current Time: ${time}`;
}
updateTime();
setInterval(updateTime, 1000);

// Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
