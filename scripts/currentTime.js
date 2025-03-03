const date = new Date();
const hours = date.getHours() % 12 || 12; // Converts 0 to 12
const ampm = date.getHours() >= 12 ? "PM" : "AM";
const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensures two-digit format
// current day
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayName = days[new Date().getDay()];
console.log(currentDayName);

const currentTime = `${hours}: ${minutes} ${ampm}`;

const div = document.createElement("div");
div.innerHTML = `
<div>
<pclass="text-2xl font-">${currentDayName}</pclass=>
<h1  class="text-2xl font-medium">${currentTime}</h1>
</div>                          
`;
document.getElementById("date-weak-section").appendChild(div);
