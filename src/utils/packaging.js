// utils/packaging.js
const { getCourierCharge } = require("./courierCharges");

const MAX_COST = 250;

function calculatePackages(items) {
  let packages = [];
  let currentPackage = { items: [], totalWeight: 0, totalPrice: 0 };

  items.forEach((item) => {
    // Check if adding this item exceeds the cost limit
    if (currentPackage.totalPrice + item.price > MAX_COST) {
      // Finalize the current package
      packages.push({
        items: currentPackage.items,
        totalWeight: currentPackage.totalWeight,
        totalPrice: currentPackage.totalPrice,
        courierPrice: getCourierCharge(currentPackage.totalWeight),
      });

      // Start a new package
      currentPackage = { items: [], totalWeight: 0, totalPrice: 0 };
    }

    // Add item to the current package
    currentPackage.items.push(item.name);
    currentPackage.totalWeight += item.weight;
    currentPackage.totalPrice += item.price;
  });

  // Push the last package if it has items
  if (currentPackage.items.length > 0) {
    packages.push({
      items: currentPackage.items,
      totalWeight: currentPackage.totalWeight,
      totalPrice: currentPackage.totalPrice,
      courierPrice: getCourierCharge(currentPackage.totalWeight),
    });
  }

  return packages;
}

module.exports = {
  calculatePackages,
};
