// script.js

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const hours = now.getHours();

  let greeting = "Hello!";
  if (hours < 12) {
    greeting = "Good Morning!";
  } else if (hours < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  document.getElementById("currentTime").textContent =
    `${greeting} Current Time: ${timeString}`;
}

// Update time when page loads
updateTime();

// Optionally, update every second (like a clock)
setInterval(updateTime, 1000);
