import {
    cardTitle,
    whiteColor,
} from "assets/jss/material-dashboard-pro-react.js"
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js"

const formGroupStyle = {
    ...customCheckboxRadioSwitch,
    cardTitle: {
        ...cardTitle,
        color: whiteColor
    },
    dropdownLegend: {
        paddingTop: "22px",
        color: "rgba(0, 0, 0, 0.26)"
    },
    buttonGroupTitle: {
        color: "#3C4858",
        fontSize: "18px",
        marginTop: "20px",
        marginBottom: "3px"
    },
    divider: {
        marginTop: "20px",
        marginBottom: "20px"
    },
    marginRight: {
        marginRight: "16px"
    },
    checkRoot: {
        
    }
}

export default formGroupStyle
