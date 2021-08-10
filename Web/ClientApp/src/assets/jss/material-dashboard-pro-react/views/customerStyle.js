import {
    cardTitle,
    whiteColor,
} from "assets/jss/material-dashboard-pro-react.js"
import customerJobStyle from "assets/jss/material-dashboard-pro-react/views/customerJobStyle"
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js"

const customerStyle = {
    ...customCheckboxRadioSwitch,
    ...customerJobStyle,
    cardTitle: {
        ...cardTitle,
        color: whiteColor
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "40px !important",
        "& button:first-child": {
            marginRight: "20px"
        },
        "@media screen and (max-width: 738px)": {
            flexWrap: "wrap",
            "& button": {
                marginRight: "0px !important",
                width: "100%"
            },
        }
    },
    justifyCenter: {
        justifyContent: "center"
    }
}

export default customerStyle
