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
    let tbl = document.getElementById("donors");
    let tblBody = document.createElement("tbody");
    donorArray.forEach(donor => {
      let row = document.createElement("tr");
      row.appendChild(document.createTextNode(donor.name));
      row.appendChild(document.createTextNode(donor.amount));
      row.appendChild(document.createTextNode(donor.type));
      tblBody.appendChild(row);
    });

    tbl.appendChild(tblBody);

      }
    )}

// rendering donation bar on load
function renderBar(){
  let card = document.querySelector("#card-front");

  let donorMeter = document.createElement("div");
  donorMeter.classList.add("meter")
  donorMeter.innerHTML = "<span style='width: 85%'></span>";

  card.append(donorMeter)

  let cardContainer = document.querySelector("#container-front")
  cardContainer.appendChild(donorMeter)
}

function renderDonors(donorObj){
  let card = document.querySelector("#card-back")
  // let newRow = document.createElement("tr")
  let donorName = document.createElement("td")
  donorName.innerText = `${donorObj.name}`

  // let donornames = document.querySelector("#donorName")
  // let donordollars = document.querySelector("#donorDollars")
  // let donortype = document.querySelector("#donarType")
  //
  // let donorName = document.createElement("li")
  // let donorDollars = document.createElement("li")
  // let donorType = document.createElement("li")
  //
  // donorName.innerText = `${donorObj.name}`
  // donorDollars.innerText = `${donorObj.amount}`
  // donorType.innerText = `${donorObj.type}`
  card.append(donorName)
  //
  let cardContainer = document.querySelector("#container-back")
  cardContainer.appendChild(donorName)
}

function flipCard() {
  var x = document.getElementById("card-front");
  var y = document.getElementById("card-back");
  y.style.display = "none";

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}



