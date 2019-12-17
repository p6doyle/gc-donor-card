// loading these functions as the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchDonors();
})

// fetching donor info from JSON file
function fetchDonors(){
  fetch("http://localhost:3000/donors")
  .then(response => response.json())
  .then(donorArray => {
    console.log(donorArray)
    })
  }

function renderBar(){
  let donorMeter = document.createElement("div");
  toyCard.classList.add("card")
}