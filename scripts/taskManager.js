document.getElementById("complete-btn").addEventListener("click", function () {
  const initialcars = document.getElementById("task-assigned").innerText;
  const convertedCards = parseFloat(initialcars);
  const checkboxText = document.getElementById("checkbox-text").innerText;
  const comvertedCheckbox = parseFloat(checkboxText);

  const cardTitle = document.getElementById("card-title").innerText;
  let activitySidebar = document.getElementById("activity-container");
  const div = document.createElement("div");
  const decreseCard = convertedCards - 1;
  const increasedChechbox = comvertedCheckbox + 1;

  alert(`sure to completed ${cardTitle}?`);
  document.getElementById("task-assigned").innerText = decreseCard;
  document.getElementById("checkbox-text").innerText = increasedChechbox;
  this.disabled = true;

  div.innerHTML = `
 <div class="p-2 bg-slate-200 mx-2 my-3 rounded-md">
                            <p class ="p-2">You have completed <span class="text-blue-500 font-semibold">${cardTitle}</span> at ${currentTime}</p>
                          </div>
`;
  document.getElementById("activity-container").appendChild(div);
});

document.getElementById("clear-history").addEventListener("click", function () {
  alert("are you sure to delete?");
  document.getElementById("activity-container").innerText = "";
});



// echo "# b11-assignment-5" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ashiful2002/b11-assignment-5.git
// git push -u origin main