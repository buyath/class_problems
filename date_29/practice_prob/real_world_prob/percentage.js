const oldPrices = [100, 150, 200, 250];
const newPrices = [120, 180, 210, 300];

const calculatePercentageIncrease = (oldPrice, newPrice) => {
    return ((newPrice - oldPrice) / oldPrice) * 100;
};
for (let i = 0; i < oldPrices.length; i++) {
    const percentageIncrease = calculatePercentageIncrease(oldPrices[i], newPrices[i]);
    console.log(`Item ${i + 1}: Percentage increase is ${percentageIncrease.toFixed(2)}%`);
}
