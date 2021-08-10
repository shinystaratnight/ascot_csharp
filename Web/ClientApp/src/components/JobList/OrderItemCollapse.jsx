import React, { useState } from 'react'
import SweetAlert from "react-bootstrap-sweetalert"
import { makeStyles } from "@material-ui/core/styles"

import clsx from 'clsx';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'

import GridItem from "components/Grid/GridItem.js"
import GridContainer from 'components/Grid/GridContainer'
import OrderItemHeader from "./OrderItemHeader"
import LineItem from "./LineItem"
import LineItemsHeader from "./LineItemsHeader"
import VariantForm from "./VariantForm"
import Button from "components/CustomButtons/Button.js"

import {
    order_status_filter_list
} from "variables/dropdown.js"

import styles from "assets/jss/material-dashboard-pro-react/views/orderItemCollapseStyle.js"


const useStyles = makeStyles(styles)

function OrderItemCollapse (props) {

    const {
        jobData,
        updateLineItemsStage,
        handleRerenderView,
        addVariantDoor
    } = props

    const [ alert, setAlert ] = React.useState(null)
    const [ expanded, setExpanded ] = useState(false)
    const [ allCompleted, setAllCompleted ] = useState(false)
    const [ allCanceled, setAllCanceled ] = useState(false)
    const [ showVariantForm, setShowVariantForm ] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
      }

    const handleChangeAllComplete = (e) => {
        let lineItemList
        if (e.target.checked) {
            lineItemList = jobData.lineItems.filter(lineItem => lineItem.isDoor ? lineItem.door.stage !== 5 : lineItem.nonDoorVariation.stage !== 5)
            let lineItemIdList = lineItemList.map(lineItem => lineItem.id)
            lineItemIdList.length > 0 ? ConfirmAlert('updateStagesByGroup', lineItemIdList, "done") : console.log("")
        }
        setAllCompleted(e.target.checked)
    }

    const handleChangeAllCancel = (e) => {
        let lineItemList
        if (e.target.checked) {
            lineItemList = jobData.lineItems.filter(lineItem => lineItem.isDoor ? lineItem.door.stage !== 6 : lineItem.nonDoorVariation.stage !== 6)
            let lineItemIdList = lineItemList.map(lineItem => lineItem.id)
            lineItemIdList.length > 0 ? ConfirmAlert('updateStagesByGroup', lineItemIdList, "cancelled") : console.log("")
        }
        setAllCanceled(e.target.checked)
    }

    const openVariantForm = (e) => {
        e.preventDefault()
        setShowVariantForm(true)
    }

    /*
        Add variant
    */
    const handleAddVariant = (variant, type) => {
        setAlert(
            <SweetAlert
              warning
              style={{ display: "block", marginTop: "-100px" }}
              title="Are you sure?"
              onConfirm={ () => { hideAlert(); addVariantDoor(variant, type, jobData.id.value); setShowVariantForm(false) } }
              onCancel={() => { hideAlert() }}
              confirmBtnCssClass={ classes.button + " " + classes.success + " " + classes.alertButton }
              cancelBtnCssClass={ classes.button + " " + classes.danger + " " + classes.alertButton }
              confirmBtnText="Yes"
              cancelBtnText="Cancel"
              showCancel
            >
            </SweetAlert>
        )
    }

    /*
        Complete or Cancel one by one
    */
    const handleCompleteOrCancel = (lineItemId, type) => {
        let lineItem = jobData.lineItems.find(lineItem => lineItem.id === lineItemId)
        console.log(lineItem)
        if (type === "done") {
            lineItem.isDoor !== 5 ? lineItem.door.stage !== 5 ? ConfirmAlert('updateStageOnebyOne', [lineItemId], type): console.log("") :
                lineItem.nonDoorVariation.stage !== 5 ? ConfirmAlert('updateStageOnebyOne', [lineItemId], type): console.log("")
        }
        else if (type === "cancelled") {
            lineItem.isDoor !== 5 ? lineItem.door.stage !== 6 ? ConfirmAlert('updateStageOnebyOne', [lineItemId], type): console.log("") :
                lineItem.nonDoorVariation.stage !== 6 ? ConfirmAlert('updateStageOnebyOne', [lineItemId], type): console.log("")
        }
    }
    /*
        Confirm alert
    */
    const ConfirmAlert = (workType, itemList, type) => {
        setAlert(
          <SweetAlert
            warning
            style={{ display: "block", marginTop: "-100px" }}
            title="Are you sure?"
            onConfirm={ () => continueWork(workType, itemList, type) }
            onCancel={() => { handleRerenderView(); hideAlert() }}
            confirmBtnCssClass={ classes.button + " " + classes.success + " " + classes.alertButton }
            cancelBtnCssClass={ classes.button + " " + classes.danger + " " + classes.alertButton }
            confirmBtnText="Yes"
            cancelBtnText="Cancel"
            showCancel
          >
          </SweetAlert>
        )
    }

    const continueWork = (workType, itemList, type) => {
        switch(workType) {
            case 'updateStagesByGroup':
                hideAlert()
                updateLineItemsStage(jobData.id.value, itemList, type)
                break
            case 'updateStageOnebyOne':
                hideAlert()
                updateLineItemsStage(jobData.id.value, itemList, type)
                break
            default:
                break
        }
    }

    const hideAlert = () => {
        setAlert(null);
    }

    const classes = useStyles()

    return (
        <Card className={ classes.wrapper }>
            { alert }
            <CardContent className={ classes.cardContent }>
                <OrderItemHeader
                    handleExpandClick={ handleExpandClick }
                    expanded={ expanded }
                    classeNames={ clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    }) }
                    job={ jobData }
                />
            </CardContent>
            <Collapse in={ expanded } timeout="auto" unmountOnExit>
                {
                    jobData.lineItems === null ?
                    <CardContent></CardContent>
                    :
                    <CardContent>
                        {
                            jobData.lineItems.length === 0 || jobData.stage === 0 ? <></> :
                                <LineItemsHeader
                                    handleChangeAllComplete={ handleChangeAllComplete }
                                    handleChangeAllCancel={ handleChangeAllCancel }
                                    orderId={ jobData.id.value }
                                />
                        }
                        {
                            showVariantForm ? <VariantForm handleAddVariant={ handleAddVariant } /> : <></>
                        }
                        {
                            jobData.lineItems.map((lineItem, index) => (
                                <LineItem key={ index }
                                    orderId={ jobData.id.value }
                                    lineItem={ lineItem }
                                    allCompleted={ allCompleted }
                                    allCanceled={ allCanceled }
                                    handleCompleteOrCancel={ handleCompleteOrCancel }
                                />
                            ))
                        }
                        {
                            order_status_filter_list.find(item => item.value === jobData.stage).text === "In Progress"?
                                <GridContainer>
                                    <GridItem xs={ 12 } sm={ 4 } md={ 1 } className={ classes.lineItemsHeaderCell + ' ' + classes.displayFlex }>
                                        <Button
                                            className={ classes.actionBtn }
                                            onClick={ (e) => openVariantForm(e) }
                                            color="info"
                                        >
                                            Add Variant …
                                        </Button>
                                    </GridItem>
                                </GridContainer>
                                : <></>
                        }

                    </CardContent>
                }

            </Collapse>
        </Card>
    )
}

export default OrderItemCollapse
