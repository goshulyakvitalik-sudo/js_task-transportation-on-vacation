/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
const price = 40;
let total = 0;
if (days >= 7) {
  total = days * price - 50;
} else if (days >= 3) {
  total = days * price - 20;
} else {
  total = days * price;
}
return total
}

module.exports = calculateRentalCost;
