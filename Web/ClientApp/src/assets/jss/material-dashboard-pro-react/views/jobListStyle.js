import {
    cardTitle,
    whiteColor,
} from "assets/jss/material-dashboard-pro-react.js"
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js"
import buttonStyle from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js"
const jobListStyle = {
    ...customCheckboxRadioSwitch,
    cardTitle: {
        ...cardTitle,
        color: whiteColor
    },
    dropdown: {
        marginTop: "6px"
    },
    ...buttonStyle
}

export default jobListStyle
