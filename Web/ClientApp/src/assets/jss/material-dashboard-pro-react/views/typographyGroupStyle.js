import {
    cardTitle,
    whiteColor,
} from "assets/jss/material-dashboard-pro-react.js"

const typographyGroupStyle = {
    cardTitle: {
        ...cardTitle,
        color: whiteColor
    },
    typo: {
        marginBottom: "40px",
        position: "relative",
        paddingLeft: "25%"
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "50%",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        width: "260px",
        position: "absolute",
        transform: "translateY(50%)"
    },
    mb_0: {
        marginBottom: "0"
    }
}

export default typographyGroupStyle
