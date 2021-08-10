import {
  defaultFont,
  grayColor
} from "assets/jss/material-dashboard-pro-react.js";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.js";

const notificationsStyle = theme => ({
  cardTitle: {
    marginTop: "0",
    marginBottom: "3px",
    color: grayColor,
    fontSize: "18px"
  },
  cardHeader: {
    zIndex: "3"
  },
  cardSubtitle: {
    ...defaultFont,
    color: grayColor,
    fontSize: "14px",
    margin: "0 0 10px"
  },
  center: {
    textAlign: "center"
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  marginRight: {
    marginRight: "5px"
  },
  modalSectionTitle: {
    marginTop: "30px"
  },
  ...modalStyle(theme)
});

export default notificationsStyle;
