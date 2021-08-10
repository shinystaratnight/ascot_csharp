import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { useParams, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

import FormLabel from "@material-ui/core/FormLabel"
import GridContainer from "components/Grid/GridContainer.js"
import CustomerSection from "./CustomerSection"
import JobSection from "./JobSection"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js"

import DoorsSection from "./DoorsSection"


import { verifyString } from "utils/validations"
import styles from "assets/jss/material-dashboard-pro-react/views/creditCheckStyle"

const useStyles = makeStyles(styles)
import ApiServices from 'api/Api.js'

const CreditCheck = (props) => {

    const { jobId } = useParams()

    const classes = useStyles()

    const [ jobData, setJobdata ] = useState({})
    const [ creditNumber, setCreditNumber ] = useState()
    const [ creditValidate, setCreditValidate ] = useState(true)
    const [ approveStatus, setApproveStatus ] = useState(false)


    useEffect(async () => {
        fetchJobData()
    }, [])

    const fetchJobData = async () => {
        const res = await ApiServices.getJobById(jobId)
        if (res.status === 200) {
            setJobdata(res.data)
        }
    }

    const approveJob = async () => {
        setCreditValidate(verifyString(creditNumber))
        if (!verifyString(creditNumber)) {
            return
        }
        const res = await ApiServices.putJobCreditCheck({ jobId: jobId, creditCheckNumber: creditNumber })
        if (res.status === 201) {
            toast.success("Successfully checked!")
            setApproveStatus(true)
        } else {
            toast.error("Error!")
        }
    }

    const addVariantDoor = async (variant, type) => {
        if (type === "non_door") {
            const res = await ApiServices.putNonDoorVariation(jobData.id.value, variant)
            if (res.status === 201) {
                await fetchJobData()
                toast.success("Successfully Added!")
            }
        } else if (type === "door") {
            const res = await ApiServices.putDoorVariation(jobData.id.value, variant)
            if (res.status === 201) {
                await fetchJobData()
                toast.success("Successfully Added!")
            }
        }
    }

    return (
        <GridContainer>
            <CustomerSection customerData={ jobData.customer } />
            <JobSection jobData={ jobData }/>
            <DoorsSection jobData={ jobData } addVariantDoor={ addVariantDoor } />

            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="rose" text>
                        <CardText color="rose">
                            <h4 className={ classes.cardTitle }>Credit Check and Approval</h4>
                        </CardText>
                    </CardHeader>
                    <CardBody className={ classes.cardBodyPadding }>
                        <GridContainer className={ classes.justifyCenter }>
                            <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
                                <FormLabel>
                                    Credit Check Number*
                                </FormLabel>
                                <CustomInput
                                    formControlProps={{
                                        fullWidth: true,
                                        className: classes.paddingTop
                                    }}
                                    inputProps={{
                                        type: "text",
                                        style: { fontSize: 20 },
                                        placeholder: "Credit Check Number",
                                        name: "creditNumber",
                                        value: creditNumber ? creditNumber : '',
                                        onChange: (e) => { e.preventDefault(); setCreditNumber(e.target.value) },
                                        readOnly: approveStatus
                                    }}
                                    error={ !creditValidate }
                                />
                            </GridItem>
                            <GridItem xs={ 12 } sm={ 6 } md={ 3 } className={ classes.actionBtn }>
                                <Button
                                    color="info"
                                    size="lg"
                                    fullWidth
                                    className={ classes.addDoorBtn }
                                    onClick={ approveJob }
                                >
                                    APPROVE ORDER
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    )
}

export default withRouter(CreditCheck)
