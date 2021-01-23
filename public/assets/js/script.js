const activityWidget = document.getElementById("activity-widget");
const codersrankPortfolio = document.getElementById("codersrank-portfolio");

const isLoading = (elementId) => {
  elementId.addEventListener("onloadstart", () => {
    getElementById.innerText = "Loading...";
  });

  elementId.addEventListener("load", () => {
    getElementById.innerText = "";
    elementId.classList.add("block")
  });
}

isLoading(activityWidget);
isLoading(codersrankPortfolio);