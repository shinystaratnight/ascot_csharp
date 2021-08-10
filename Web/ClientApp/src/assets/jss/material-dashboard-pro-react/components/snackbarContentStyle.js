import {
  defaultFont,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  orangeBoxShadow,
  grayBoxShadow,
  blackBoxShadow,
  whiteBoxShadow,
  whiteColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  hexToRgb,
  primaryColor,
  orangeColor,
  grayColor,
  blackColor
} from "assets/jss/material-dashboard-pro-react.js";

const snackbarContentStyle = {
  root: {
    ...defaultFont,
    flexWrap: "unset",
    position: "relative",
    padding: "30px 20px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: grayColor,
    borderRadius: "3px",
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(whiteColor) +
      ", 0.28), 0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 7px 8px -5px rgba(" +
      hexToRgb(whiteColor) +
      ", 0.2)"
  },
  top20: {
    top: "20px"
  },
  top40: {
    top: "40px"
  },
  info: {
    backgroundColor: infoColor[3],
    color: whiteColor,
    ...infoBoxShadow
  },
  success: {
    backgroundColor: successColor[3],
    color: whiteColor,
    ...successBoxShadow
  },
  warning: {
    backgroundColor: warningColor[3],
    color: whiteColor,
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: dangerColor[3],
    color: whiteColor,
    ...dangerBoxShadow
  },
  
  rose: {
    backgroundColor: roseColor[3],
    color: whiteColor,
    ...roseBoxShadow
  },
  // dark blue
  primary: {
    backgroundColor: primaryColor,
    color: whiteColor,
    ...primaryBoxShadow
  },
  // orange 
  orange: {
    backgroundColor: orangeColor,
    color: whiteColor,
    ...orangeBoxShadow
  },
  // gray 
  gray: {
    backgroundColor: grayColor,
    color: blackColor,
    ...grayBoxShadow
  },
  // black
  black: {
    backgroundColor: blackColor,
    color: whiteColor,
    ...blackBoxShadow
  },
  // white
  white: {
    backgroundColor: whiteColor,
    color: blackColor,
    ...whiteBoxShadow
  },
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "11px",
    height: "11px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    padding: "0"
  },
  icon: {
    width: "38px",
    height: "38px",
    display: "block",
    left: "15px",
    position: "absolute",
    marginTop: "-39px",
    fontSize: "20px",
    backgroundColor: whiteColor,
    padding: "9px",
    borderRadius: "50%",
    maxWidth: "38px",
    boxShadow:
      "0 10px 30px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.42), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)"
  },
  infoIcon: {
    color: successColor[3]
  },
  successIcon: {
    color: successColor[3]
  },
  warningIcon: {
    color: warningColor[3]
  },
  dangerIcon: {
    color: dangerColor[3]
  },
  primaryIcon: {
    color: primaryColor
  },
  roseIcon: {
    color: roseColor[3]
  },
  iconMessage: {
    paddingLeft: "50px",
    display: "block"
  },
  lg: {
    fontSize: "20px"
  }
};

export default snackbarContentStyle;
