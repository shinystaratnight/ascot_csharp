import {
    cardTitle,
    whiteColor,
} from "assets/jss/material-dashboard-pro-react.js"
import customerJobStyle from "assets/jss/material-dashboard-pro-react/views/customerJobStyle"
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js"
import buttonStyle from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js"

const creditCheckStyle = {
    ...customCheckboxRadioSwitch,
    ...customerJobStyle,
    cardTitle: {
        ...cardTitle,
        color: whiteColor
    },
    dropdown: {
        marginTop: "4px"
    },
    actionBtn: {
        display: "flex",
        paddingBottom: "12px !important",
        alignItems: "flex-end",
        fontSize: "20px"
    },
    // ...buttonStyle
}

export default creditCheckStyle
