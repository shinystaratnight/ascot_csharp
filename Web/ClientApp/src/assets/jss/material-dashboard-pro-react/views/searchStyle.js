import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js"
import buttonStyle from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js"

const searchStyle = {
    ...customCheckboxRadioSwitch,
    ...buttonStyle,
    buttonWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    marginRight: {
        marginRight: "20px"
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
    marginTop: {
        marginTop: "30px"
    },
    actionButton: {
        margin: "0 0 0 5px",
        padding: "5px",
        "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
          marginRight: "0px"
        }
    },
    actionButtonRound: {
        width: "auto",
        height: "auto",
        minWidth: "auto"
    },
    table_cell: {
        height: "53px"
    },
    overflowX: {
        overflowX: "auto"
    },
    toolTipTitle: {
        fontSize: "20px", 
        marginBottom: "0", 
        lineHeight: "1.5" 
    },
    cursorPointer: {
        cursor: "pointer"
    }
}

export default searchStyle
