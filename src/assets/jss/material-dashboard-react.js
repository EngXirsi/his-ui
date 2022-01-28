const hexToRgb = (input) => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
      throw new Error("input is not a valid hex color.");
    }
    if (input.length === 3) {
      let first = input[0];
      let second = input[1];
      let last = input[2];
      input = first + first + second + second + last + last;
    }
    // console.log(input)
    input = input.toUpperCase();
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
      return (
      parseInt(first, 16) +
      ", " +
      parseInt(second, 16) +
      ", " +
      parseInt(last, 16)
    );
  };
// console.log(hexToRgb("#ff0000"))
  const drawerWidth = 200;
  const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
  }
  const container = {
      paddingRight : "15px",
      paddingLeft:"auto",
      marginRight:"auto",
      marginLeft:"auto"

  }

  const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
  };
  
  const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
  const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
  const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
  const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
  const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
  const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
  const grayColor = [
    "#999",
    "#777",
    "#3C4858",
    "#AAAAAA",
    "#D2D2D2",
    "#DDD",
    "#b4b4b4",
    "#555555",
    "#333",
    "#a9afbb",
    "#eee",
    "#e7e7e7",
  ];
  const blackColor = "#000";
  const whiteColor = "#FFF";
  const boxShadow = {
    boxShadow:
      "0 10px 30px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.42), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
  };

  const defaultBoxShadow = {
    border: "0",
    borderRadius: "3px",
    boxShadow:
      "0 10px 20px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.42), 0 3px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
  };
  const primaryBoxShadow = {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(primaryColor[0]) +
      ",.4)",
  };
  export  {
    hexToRgb,
    //variables
    drawerWidth,
    transition,
    container,
    boxShadow,
    primaryBoxShadow,
    defaultFont,
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    blackColor,
    whiteColor,
    
    defaultBoxShadow,
  
  };