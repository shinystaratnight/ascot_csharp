import React from 'react'

import { makeStyles } from "@material-ui/core/styles"

import Check from "@material-ui/icons/Check"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import GridContainer from 'components/Grid/GridContainer'
import GridItem from "components/Grid/GridItem.js"


import styles from "assets/jss/material-dashboard-pro-react/views/orderItemCollapseStyle.js"

const useStyles = makeStyles(styles)

function LineItemsHeader(props) {

    const { 
        handleChangeAllComplete, 
        orderId, 
        handleChangeAllCancel, 
    } = props

    const classes = useStyles()

    return (
        <GridContainer>
            <GridItem xs={ 12 } md={ 10 }>     
            </GridItem>
            <GridItem xs={ 12 } sm={ 4 } md={ 1 } className={ classes.lineItemsHeaderCell + ' ' + classes.alignItemsCenter }>
                <div
                    className={ classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal + " " + classes.checkbox }
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                tabIndex={-1}
                                onClick={ (e) => handleChangeAllComplete(e, orderId) }
                                checkedIcon={
                                    <Check className={ classes.checkedIcon } />
                                }
                                icon={<Check className={ classes.uncheckedIcon } />}
                                classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                }}
                            />
                        }
                        classes={{
                            label: classes.label,
                            root: classes.labelRoot
                        }}
                        label="Select All"
                    />
                </div>
            </GridItem>
            <GridItem xs={ 12 } sm={ 4 } md={ 1 } className={ classes.lineItemsHeaderCell + ' ' + classes.alignItemsCenter }>
                <div
                    className={ classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal + " " + classes.checkbox }
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                tabIndex={-1}
                                onClick={ (e) => handleChangeAllCancel(e, orderId) }
                                checkedIcon={
                                    <Check className={ classes.checkedIcon } />
                                }
                                icon={<Check className={ classes.uncheckedIcon } />}
                                classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                }}
                            />
                        }
                        classes={{
                            label: classes.label,
                            root: classes.labelRoot
                        }}
                        label="Select All"
                    />
                </div>
            </GridItem>
        </GridContainer>
    )
}

export default LineItemsHeader
