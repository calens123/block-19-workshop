// Arrays of names/occupations for random freelancer data to be inserted

const names = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Artist"];
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

// Selecting the DOM elements (list of freelancers and average price from the HTML file)

const freelancerList = document.querySelector("#freelancer-list");
const averagePriceElement = document.querySelector("#average-price");

// Function to calculate the average starting price

function calculateAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return (total / freelancers.length).toFixed(2);
}

// Function to render the freelancers table (relied heavily on Google/W3 schools for this part, but seems like a relatively streamlined approach)

function renderFreelancers() {
  freelancerList.innerHTML = ""; // Clear the existing rows
  freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${freelancer.name}</td>
        <td>${freelancer.occupation}</td>
        <td>${freelancer.price}</td>
        `;
    freelancerList.appendChild(row);
  });

  // Update to the average price
  averagePriceElement.textContent = `The average starting price is $${calculateAveragePrice()}.`;
}

// Function to generate a random freelancer

function addRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20; // Generates a random price between 20 and 120.
  const newFreelancer = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };
  freelancers.push(newFreelancer);
  renderFreelancers();
}

// Initial render of freelancers
renderFreelancers();

// Add a new freelancer every 10 seconds
setInterval(addRandomFreelancer, 10000);
