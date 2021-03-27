const btn = document.querySelector(".dark-light");
const theme = document.querySelector("#style-scheme");
btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "./assets/css/style.css") {
    theme.href = "./assets/css/style-dark.css";
  } else {
    theme.href = "./assets/css/style.css";
  }
});