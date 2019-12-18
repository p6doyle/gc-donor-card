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

function renderBar(donorObj){

  let card = document.querySelector("#card");

  let donorMeter = document.createElement("div");
  donorMeter.classList.add("meter")
  donorMeter.innerHTML = "<span style='width: 85%'></span>";

  card.append(donorMeter)

  let cardContainer = document.querySelector("#container")
  cardContainer.appendChild(donorMeter)
}

function myFunction() {
  var x = document.getElementById("card-front");
  var y = document.getElementById("card-back");
  y.classList.remove("hidden");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



