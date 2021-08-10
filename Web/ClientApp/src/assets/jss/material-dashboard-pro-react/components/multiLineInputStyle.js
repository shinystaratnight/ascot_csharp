import customInputStyle from "assets/jss/material-dashboard-pro-react/components/customInputStyle"

const multiLineInputStyle = {
    ...customInputStyle,
    formControl: {
        margin: "0 0 17px 0",
        "& .MuiInputBase-root": {
            lineHeight: "1.29em"
        }
    }
}

export default multiLineInputStyle
