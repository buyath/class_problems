function assignRunway(destination) {
    let runway;
  
    switch (destination.toLowerCase()) {
      case 'new york':
        runway = 'Runway 1';
        break;
      case 'london':
        runway = 'Runway 2';
        break;
      case 'paris':
        runway = 'Runway 3';
        break;
      case 'tokyo':
        runway = 'Runway 4';
        break;
      case 'dubai':
        runway = 'Runway 5';
        break;
      default:
        runway = 'No assigned runway, please check the destination';
        break;
    }
  
    return `The flight to ${destination} is assigned to ${runway}.`;
  }
  
 
  let destination = prompt("Enter the flight destination: ");
  console.log(assignRunway(destination));
  