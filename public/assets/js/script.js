const activityWidget = document.getElementById("activity-widget");
const codersrankSkillsChart = document.getElementById("codersrank-skills-chart");
const codersrankPortfolio = document.getElementById("codersrank-portfolio");

const isLoading = (elementId) => {
  elementId.addEventListener("onloadstart", () => {
    getElementById.innerText = "Loading...";
  });

  elementId.addEventListener("load", () => {
    getElementById.innerText = "";
  });
}

isLoading(activityWidget);
isLoading(codersrankSkillsChart);
isLoading(codersrankPortfolio);