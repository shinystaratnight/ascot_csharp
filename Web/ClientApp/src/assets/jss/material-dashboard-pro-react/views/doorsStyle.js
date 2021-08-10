import {
    cardTitle,
    whiteColor,
} from "assets/jss/material-dashboard-pro-react.js"
import customerJobStyle from "assets/jss/material-dashboard-pro-react/views/customerJobStyle"
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js"


const doorsStyle = {
    ...customCheckboxRadioSwitch,
    ...customerJobStyle,
    cardTitle: {
        ...cardTitle,
        color: whiteColor
    },
    addDoorBtn: {
        marginBottom: "20px",
        "@media screen and (max-width: 600px)": {
            width: "100%"
        }
    },
    noAddBtn: {
        marginLeft: "20px",
        "@media screen and (max-width: 600px)": {
            width: "100%",
            marginLeft: "0"
        } 
    },
    disableForm: {
        pointerEvents: "none",
        opacity: "0.8"
    }
}

export default doorsStyle