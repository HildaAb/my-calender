const monthName = document.querySelector("#month-name");
const dayName = document.querySelector("#day-name");
const dayNum = document.querySelector("#day-number");
const year = document.querySelector("#year");

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
monthName.innerHTML = date.toLocaleDateString("en", { month: "long" });
dayName.innerHTML = date.toLocaleString("en", { weekday: "long" });
dayNum.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();
