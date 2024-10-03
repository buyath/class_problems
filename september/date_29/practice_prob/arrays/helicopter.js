const landing_times = [12, 15, 12, 18, 20];
const uniqueLandingTimes = new Set(landing_times);
if (uniqueLandingTimes.size < landing_times.length) {
    console.log("Yes, there are helicopters scheduled to land at the same time.");
} else {
    console.log("No, all helicopters have different landing times.");
}