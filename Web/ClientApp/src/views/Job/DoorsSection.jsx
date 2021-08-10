import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import SweetAlert from "react-bootstrap-sweetalert"

import VariantForm from "components/JobList/VariantForm"
import DoorLineItem from "./DoorLineItem"
import NonDoorLineItem from "./NonDoorLineItem"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"
import GridContainer from "components/Grid/GridContainer.js"
import Button from "components/CustomButtons/Button.js"

import styles from "assets/jss/material-dashboard-pro-react/views/creditCheckStyle"

const useStyles = makeStyles(styles)

const DoorsSection = (props) => {

    const classes = useStyles()

    const {
        jobData,
        addVariantDoor
    } = props

    const [ alert, setAlert ] = React.useState(null)
    const [ showVariantForm, setShowVariantForm ] = useState(false)

    const openVariantForm = (e) => {
        e.preventDefault()
        setShowVariantForm(true)
    }

    const handleAddVariant = (variant, type) => {
        setAlert(
            <SweetAlert
              warning
              style={{ display: "block", marginTop: "-100px" }}
              title="Are you sure?"
              onConfirm={ () => { hideAlert(); addVariantDoor(variant, type); setShowVariantForm(false) } }
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

    const hideAlert = () => {
        setAlert(null)
    }

    return (
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="rose" text>
                    <CardText color="rose">
                        <h4 className={ classes.cardTitle }>Doors</h4>
                    </CardText>
                </CardHeader>
                <CardBody className={ classes.cardBodyPadding }>
                    <GridContainer className={ classes.justifyCenter }>
                        {
                            !!(jobData.lineItems) ?
                                jobData.lineItems.length > 0 ?
                                    jobData.lineItems.map(lineItem => (
                                        lineItem.isDoor ?
                                            <DoorLineItem lineItem={ lineItem } key={ lineItem.id } />
                                            :
                                            <NonDoorLineItem lineItem={ lineItem } key={ lineItem.id } />
                                    ))
                                    : <></>
                                :<></>
                        }
                        <GridItem xs={12}>
                            {
                                showVariantForm ? <VariantForm handleAddVariant={ handleAddVariant } /> : <></>
                            }
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={ 12 } sm={ 4 } md={ 1 } >
                            <Button
                                onClick={ (e) => openVariantForm(e) }
                                color="info"
                                size="lg"
                            >
                                Add Variant …
                            </Button>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
            { alert }
        </GridItem>
    )
}

export default DoorsSection
