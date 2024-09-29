let totalAltitude = 1000; 
let intervals = 10;
let altitudePerInterval = totalAltitude / intervals;

console.log(`Climbing to an altitude of ${totalAltitude}ft over ${intervals} intervals`);
for (let i = 1; i <= intervals; i++) {
  let currentAltitude = altitudePerInterval * i;
  console.log(`Interval ${i}: Altitude = ${currentAltitude.toFixed(2)} ft`);
}

console.log("\nReached the target altitude!");


const Names = [
  {
    Name :"thayub",
    age:19
  },{
    Name:"logesh",
    age:20
  }
]
// for(var i =0; i<Names.length; i++){
//   console.log(Names[i].age);
// }
