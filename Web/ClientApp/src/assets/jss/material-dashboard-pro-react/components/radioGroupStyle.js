import {
    primaryColor,
} from "assets/jss/material-dashboard-pro-react.js"
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js"

const radioGroupStyle = {
    ...customCheckboxRadioSwitch,
    labelRoot: {
        marginTop: "0 !important"
    },
    wrapper: {
        // display: "flex",
        display: "block",
        marginBottom: "20px",
        flexWrap: "wrap",
        "@media screen and (max-width: 992px)": {
            marginBottom: "20px"
        }
    },
    title: {
        display: "flex",
        alignItems: "center",
        paddingRight: "50px",
        "& label": {
            paddingTop: "0",
            color: primaryColor
        },
        "@media screen and (max-width: 992px)": {
            width: "100%"
        }
    },
    radioGroup: {
        display: "flex",
        alignItems: "center"
    },
    radioItem: {
        marginTop: "0 !important"
    }
}

export default radioGroupStyle
