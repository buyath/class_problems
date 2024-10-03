function climbToAltitude() {
    let totalAltitude = 1000; 
    let intervals = 10; 
    let altitudePerInterval = totalAltitude / intervals; 
    let currentAltitude = 0;
  
    for (let i = 1; i <= intervals; i++) {
      currentAltitude += altitudePerInterval;
      console.log(`Interval ${i}: Altitude = ${currentAltitude} ft`);
    }
  }
  
 
  climbToAltitude();
  