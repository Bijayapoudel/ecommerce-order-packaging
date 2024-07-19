// utils/courierCharges.js
const courierCharges = [
  { range: [0, 200], charge: 5 },
  { range: [201, 500], charge: 10 },
  { range: [501, 1000], charge: 15 },
  { range: [1001, 5000], charge: 20 },
];

// Function to calculate courier price based on weight

function getCourierCharge(weight) {
  for (const charge of courierCharges) {
    if (weight >= charge.range[0] && weight <= charge.range[1]) {
      return charge.charge;
    }
  }
  return 0; // Default if no range matched
}

module.exports = {
  getCourierCharge,
};
