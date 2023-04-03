console.log("connected")

function getColorValue(color) {
    // Convert input color to lowercase
    const lowerCaseColor = color.toLowerCase();
  
    // Switch statement to match the color value
    switch(lowerCaseColor) {
      case "black":
        return "black"; // return black color code
      case "violet":
        return "violet"; // return violet color code
      case "pink":
        return "pink"; // return pink color code
      default:
        return "Invalid color"; // return for any other input color
    }
  }
  
  // Example usage:
  console.log(getColorValue("Black")); // "#000000"
  console.log(getColorValue("violet")); // "#ee82ee"
  console.log(getColorValue("PINK")); // "#ffc0cb"
  console.log(getColorValue("red")); // "Invalid color"
