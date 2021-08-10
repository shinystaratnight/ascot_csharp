import customerJobStyle from "assets/jss/material-dashboard-pro-react/views/customerJobStyle"

const jobStyle = {
    ...customerJobStyle,
    attendancesWrapper: {
        overflowX: "auto"
    },
    installationBtns: {
        height: "100%"
    },
    installationBtnGroup: {
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
        // paddingTop: "21px !important",
        // paddingBottom: "14px !important"
        textAlign: "right"
    },
    saveBtn: {
        width: "fit-content",
        marginLeft: "16px"
    },
    dropdown: {
        marginTop: "4px"
    },
    fieldset: {
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "16px",
        borderWidth: "1px",
        borderColor: "rgba(0, 0, 0, 0.23)"
    }
}

export default jobStyle
