
const themes = ["theme-1", "theme-2", "theme-3", "theme-4", "theme-5"];
let currentTheme = 0;

document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.remove(...themes); // Remove all themes
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.classList.add(themes[currentTheme]); // Apply new theme
});
