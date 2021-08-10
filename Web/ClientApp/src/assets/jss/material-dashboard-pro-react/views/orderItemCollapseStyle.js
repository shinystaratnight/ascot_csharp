import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js"
import buttonStyle from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js"

const orderItemCollapseStyle = theme => ({
    ...customCheckboxRadioSwitch,
    headerItem: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            marginBottom: '0px',
            fontSize: "20px",
            lineHeight: '1.5',
            '& span': {
                fontWeight: 'bold',
                marginRight: '4px'
            }
        }
    },
    editBtn: {
        fontSize: "20px",
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    expandBtn: {
        display: 'flex'
    },
    checkbox: {
        marginTop: '0px !important'
    },
    lineItem: {
        marginBottom: '8px'
    },
    lineItemCell: {
        display: 'flex',
        alignItems: 'center',
        // height: '48px',
        '& p': {
            marginBottom: '0px !important',
            fontSize: '20px',
            lineHeight: '1.3'
        }
    },
    actionBtn: {
        fontSize: '18px'
    },
    lineItemsHeaderCell: {
        paddingRight: '0 !important'
    },
    label: {
        fontSize: '18px !important',
        paddingLeft: '0 !important'
    },
    displayFlex: {
        display: 'flex'
    },
    cursorPointer: {
        cursor: "pointer"
    },
    lineItemStageDropdown: {
        "& .MuiInputBase-root": {
            marginBottom: "0px"
        }
    },
    alignItemsCenter: {
        display: "flex",
        alignItems: "center"
    },
    wrapper: {
        marginTop: '20px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardContent: {
        paddingBottom: "16px !important"
    },
    alertButton: {
        fontSize: '16px !important'
    },
    dropdown: {
        marginTop: "4px"
    },
    textField: {
        paddingTop: "4px"
    },
    variantFormWrapper: {
        marginTop: "20px"
    },
    variantBtnWrapper: {
        display: "flex",
        alignItems: "flex-end"
    },
    variantBtn: {
        marginBottom: "17px"
    },
    ...buttonStyle
})

export default orderItemCollapseStyle

