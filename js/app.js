
const completeButtons = document.getElementsByClassName("complete-btn");
Array.from(completeButtons).forEach((button) => {
  button.addEventListener("click", function () {
    this.disabled = true;
    const taskTitle =
      this.closest(".card").querySelector(".card-title").innerText;

    const currentTime = new Date().toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const logMessage = `You have completed the task "${taskTitle}" at ${currentTime}`;

    const activityLogContainer = document.querySelector(
      ".activity-log-container"
    );
    const logDiv = document.createElement("div");
    logDiv.classList.add("bg-[#F4F7FF]", "m-4", "p-3", "rounded-lg");
    logDiv.innerText = logMessage;

    activityLogContainer.appendChild(logDiv);

    const taskCount = document.getElementById("taks-count");
    const totalTaskCount = document.getElementById("total-task");
    taskCount.innerText--;
    totalTaskCount.innerText++;
    alert("Task Completed ✅");
    if (taskCount.innerText == 0) {
      alert("Congratualation! All task Completed");
    }
  });
});

const clearHistoryButton = document.querySelector(".btn.clear-history");
clearHistoryButton.addEventListener("click", function () {
  const activityLogContainer = document.querySelector(
    ".activity-log-container"
  );
  activityLogContainer.innerHTML = "";
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
}

function changeButtonColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function displayCurrentDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentTime = new Date();
  const dayToday = daysOfWeek[currentTime.getDay()];
  const monthToday = monthsOfYear[currentTime.getMonth()];
  const day = currentTime.getDate();
  const yearToday = currentTime.getFullYear();

  document.getElementById("currentDay").innerText = dayToday.slice(0, 3);
  document.getElementById("currentMonth").innerText =
    monthToday.slice(0, 3) + " " + day + " " + yearToday;
}
displayCurrentDate();


document.getElementById("blog-page-btn").addEventListener("click", function () {
  window.location.assign("../blog.html");
});
