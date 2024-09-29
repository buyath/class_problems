const populations = [50, 60, 70, 80, 90];
const totalPopulation = populations.reduce((sum, population) => sum + population, 0);
const averagePopulation = totalPopulation / populations.length;
console.log(averagePopulation);
