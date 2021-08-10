import {
    primaryColor
} from "assets/jss/material-dashboard-pro-react.js";
import buttonStyle from "../components/buttonStyle.js"

const customerJobStyle = {
    ...buttonStyle,
    cardBodyPadding: {
        paddingTop: "50px",
        paddingBottom: "30px"
    },
    paddingTop: {
        paddingTop: "4px !important"
    },
    groupTitle: {
        marginTop: "20px",
        marginBottom: "30px",
        fontWeight: "bold",
        color: primaryColor
    }
}

export default customerJobStyle
