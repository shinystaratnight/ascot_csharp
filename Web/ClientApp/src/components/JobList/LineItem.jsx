import React, { useState, useEffect} from 'react'

import { makeStyles } from "@material-ui/core/styles"
import Check from "@material-ui/icons/Check"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import { formatCurrency } from "utils/utils.js"
import {
    doorTypeList,
    line_item_status_filter_list
} from "variables/dropdown.js"

import styles from "assets/jss/material-dashboard-pro-react/views/orderItemCollapseStyle.js"

const useStyles = makeStyles(styles)

function LineItem(props) {

    const {
        orderId,
        lineItem,
        allCompleted,
        allCanceled,
        handleCompleteOrCancel
    } = props

    const [ completed, setCompleted ] = useState(false)
    const [ canceled, setCanceled ] = useState(false)

    const handleChangeComplete = (e) => {
        setCompleted(!completed)
        if (e.target.checked) {
            handleCompleteOrCancel(lineItem.id, "done")
        }
    }

    const handleChangeCancel = (e) => {
        setCanceled(!canceled)
        if (e.target.checked) {
            handleCompleteOrCancel(lineItem.id, "cancelled")
        }
    }

    useEffect(() =>{
        setCompleted(allCompleted)
        setCanceled(allCanceled)
    }, [allCompleted, allCanceled])

    const classes = useStyles()

    return (
        <GridContainer className={ classes.lineItem }>
            <GridItem xs={ 12 } sm={ 12 } md={ 2 } className={ classes.lineItemCell }>
                <p>
                   { `${ orderId }-${ lineItem.id > 99 ? lineItem.id : lineItem.id > 9 ? "0" + lineItem.id : "00" + lineItem.id }` }
                </p>
            </GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 6 } className={ classes.lineItemCell }>
                {
                    lineItem.isDoor ?
                        <p>
                            { `${ doorTypeList.find(item => item.value === lineItem.door.type).text }, ` }
                            { `${ formatCurrency(lineItem.door.costPrice) }, ${ formatCurrency(lineItem.door.sellPrice) } ,` }
                            { `${ lineItem.door.colour === '' ? '' : lineItem.door.colour }` }
                        </p>
                        :
                        <p>
                            { `${ lineItem.nonDoorVariation.description }, ${ formatCurrency(lineItem.nonDoorVariation.costPrice) }, ${ formatCurrency(lineItem.nonDoorVariation.sellPrice) },` }
                            { `${ lineItem.nonDoorVariation.instructedBy }, ${ lineItem.nonDoorVariation.instructionDate }` }
                        </p>
                }
            </GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 2 } className={ classes.lineItemCell }>
                <p>
                    { line_item_status_filter_list.find(item => lineItem.isDoor ? lineItem.door.stage === item.value : lineItem.nonDoorVariation.stage === item.value).text  }
                </p>
            </GridItem>

            <GridItem xs={ 12 } sm={ 4 } md={ 1 } className={ classes.alignItemsCenter }>
                <div
                    className={ classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal + " " + classes.checkbox }
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                tabIndex={-1}
                                onChange={ (e) => handleChangeComplete(e) }
                                checkedIcon={
                                    <Check className={ classes.checkedIcon } />
                                }
                                icon={<Check className={ classes.uncheckedIcon } />}
                                classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                }}
                                checked={ completed }
                            />
                        }
                        classes={{
                            label: classes.label,
                            root: classes.labelRoot
                        }}
                        label="Done"
                    />
                </div>
            </GridItem>
            <GridItem xs={ 12 } sm={ 4 } md={ 1 } className={ classes.alignItemsCenter }>
                <div
                    className={ classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal + " " + classes.checkbox }
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                tabIndex={-1}
                                onClick={ (e) => handleChangeCancel(e) }
                                checkedIcon={
                                    <Check className={ classes.checkedIcon } />
                                }
                                icon={<Check className={ classes.uncheckedIcon } />}
                                classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                }}
                                checked={ canceled }
                            />
                        }
                        classes={{
                            label: classes.label,
                            root: classes.labelRoot
                        }}
                        label="Cancel"
                    />
                </div>
            </GridItem>
        </GridContainer>
    )
}

export default LineItem
