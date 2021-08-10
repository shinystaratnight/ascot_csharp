import React, { useState } from 'react'
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import { withRouter } from "react-router-dom"
import { toast } from 'react-toastify'

import AddIcon from '@material-ui/icons/Add'

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"
import Button from "components/CustomButtons/Button.js"

import DoorsForm from "components/DoorsForm/DoorsForm"
import CheckDoorsForm from "components/DoorsForm/CheckDoorsForm"

import {
    initialNettOrDiscountValidation,
    verifyNettOrDiscountForm
} from "utils/validations"

import ApiServices from "api/Api.js"

import styles from "assets/jss/material-dashboard-pro-react/views/doorsStyle"


const useStyles = makeStyles(styles)

function Doors (props) {

    const { 
        handleConfirmDoor, 
        doorDataList, 
        handleChangeDoorForm, 
        newDoorValidation,
        enableCreateDoor,
        history,
        newJobId,
        handleChangeCustomerDoorRef    
    } = props
    
    const classes = useStyles()
    
    const [ netOrLess, setNetOrLess ] = useState({})
    const [ nettOrDiscountValidation, setNettOrDiscountValidation ] = useState(initialNettOrDiscountValidation)

    const handleChangeCheckForm = (e) => {
        setNetOrLess(prev => {
            prev[e.target.name] = e.target.value
            return prev
        })        
    }

    const handleAllDone = async (e) => {
        e.preventDefault()
        
        const { status, verifyResult } = verifyNettOrDiscountForm(netOrLess)
        
        setNettOrDiscountValidation(verifyResult)
        let isSuccess = true
        if (status && (doorDataList.length > 0)) {
            for (var i = 0; i < doorDataList.length; i++) {
                for (var j = 0; j < parseInt(doorDataList[i].no_doors); j++) {
                    let postData = doorDataList[i]
                    postData.customerDoorRef = doorDataList[i].customerDoorRefList[j]
                    const res = await ApiServices.addDoors({jobId: newJobId, doorData: postData})    
                    isSuccess ? res.status === 201 ? true : false : false                
                }
            }

            let nettOrDiscount = {}
            if (netOrLess.nett_less_discount === "nett") {
                nettOrDiscount = {
                    "isNettOrDiscount": 0
                }
            } else if (netOrLess.nett_less_discount === "less") {
                if (netOrLess.discount !== "other") {
                    nettOrDiscount = {
                        "isNettOrDiscount": 1,
                        "percentDiscount": parseFloat(netOrLess.discount)
                    }
                }
                else if (netOrLess.discount === "other") {
                    nettOrDiscount = {
                        "isNettOrDiscount": 1,
                        "other": netOrLess.other_discount
                    }
                }
            }
            
            const res = await ApiServices.putJobNettOrDiscount({jobId: newJobId, nettOrDiscount: nettOrDiscount})
            console.log(res)
            if (isSuccess) {
                toast.success("Successfully Created!")
            }
            history.push(`/job/${ newJobId }`)
        }
    }

    const cardBodyClasses = classNames({
        [classes.cardBodyPadding]: true,
        [classes.disableForm]: !enableCreateDoor
    })

    return (
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="rose" text>
                    <CardText color="rose">
                        <h4 className={ classes.cardTitle }>Doors</h4>
                    </CardText>
                </CardHeader>
                <CardBody className={ cardBodyClasses }>
                    <GridContainer>
                        {
                            doorDataList.map((doorItem, index) => (
                                <DoorsForm 
                                    doorFormData={ doorItem }
                                    key={ index } 
                                    index={ index } 
                                    handleChange={ handleChangeDoorForm }
                                    newDoorValidation={ newDoorValidation }
                                    newDoor={ (index + 1) === doorDataList.length ? true : false }
                                    handleChangeCustomerDoorRef={ handleChangeCustomerDoorRef }
                                />                               
                            ))
                        }
                    </GridContainer>
                    
                    <GridContainer>
                        <GridItem xs={ 12 }>
                            <Button 
                                color="info" 
                                size="lg" 
                                className={ classes.addDoorBtn } 
                                onClick={ handleConfirmDoor }                                
                            >
                                <AddIcon className={ classes.icons } /> Confirm door
                                {/* <AddIcon className={ classes.icons } /> Add Another Door */}
                            </Button>
                        </GridItem>
                    </GridContainer>

                    <CheckDoorsForm 
                        doorDataList={ doorDataList }
                        handleChangeCheckForm={ handleChangeCheckForm }
                        nettOrDiscountValidation={ nettOrDiscountValidation }                                    
                    />
                    
                    <GridContainer>
                        <GridItem>
                            <Button 
                                color="rose" 
                                size="lg" 
                                // className={ classes.noAddBtn }                               
                                onClick={ (e) => handleAllDone(e) }
                            >
                                All Done
                            </Button>
                        </GridItem>

                    </GridContainer>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default withRouter(Doors)
