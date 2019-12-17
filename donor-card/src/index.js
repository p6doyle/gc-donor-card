// loading these functions as the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchDonors();
  renderBar();
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

  let card = document.querySelector("#card");

  let donorMeter = document.createElement("div");
  donorMeter.classList.add("meter")

  card.append(donorMeter)

  let cardContainer = document.querySelector("#container")
  cardContainer.appendChild(donorMeter)
}