let position = { x: 0, y: 0 };
function moveRobot(direction) {
  switch (direction.toLowerCase()) {
    case "north":
      position.y += 1;
      break;
    case "south":
      position.y -= 1;
      break;
    case "east":
      position.x += 1;
      break;
    case "west":
      position.x -= 1;
      break;
    default:
      console.log("Invalid direction. Please enter North, South, East, or West.");
      return;
  }

  console.log(`The robot is now at position (x: ${position.x}, y: ${position.y})`);
}


moveRobot("north");
moveRobot("east");
moveRobot("south");
moveRobot("west");
