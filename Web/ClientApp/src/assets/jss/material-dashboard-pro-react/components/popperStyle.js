import searchStyle from "../views/searchStyle"
import {
    grayColor
} from "../../material-dashboard-pro-react"

const popperStyle={
    ...searchStyle,
    popperWrapper: {
        left: "-16px !important"
    },
    popperContent: {
        padding: "16px",
        backgroundColor: grayColor,
        position: "relative",
        "&:before": {
            borderBottom: `8px solid white`,
            borderLeft: `8px solid ${ grayColor }`,
            borderTop: `8px solid white`,
            right: "-9px",
            content: "''",
            position: "absolute"
        }
    },
    contentWrapper: {
        maxWidth: "300px"
    },
    justifyCenter: {
        justifyContent: "center",
        display: "flex"
    }
}

export default popperStyle
