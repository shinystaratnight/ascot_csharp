import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"
import FormLabel from "@material-ui/core/FormLabel"
import CustomInput from "components/CustomInput/CustomInput.js"
import MultiLineInput from "components/CustomInput/MultiLineInput.js"

import styles from "assets/jss/material-dashboard-pro-react/views/customerStyle.js"

const useStyles = makeStyles(styles)

const CustomerSection = (props) => {

    const { customerData } = props

    const [ customer, setCustomer ] = useState()

    useEffect(() => {
        setCustomer(customerData)
    }, [customerData])

    const classes = useStyles()

    return (
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="rose" text>
                    <CardText color="rose">
                        <h4 className={ classes.cardTitle }>Customer</h4>
                    </CardText>
                </CardHeader>
                <CardBody className={ classes.cardBodyPadding }>
                    <GridContainer className={ classes.justifyCenter }>
                        <GridItem xs={ 12 } sm={ 12 } md={ 12 }>                            
                            <FormLabel>
                                Customer Name*
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.paddingTop
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "Customer Name",
                                    readOnly: true,
                                    name: "name",
                                    value: customer ? customer.name : '',
                                }}
                            />                            
                        </GridItem>  
                        <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                            <FormLabel>
                                Address Lines*
                            </FormLabel>
                            <MultiLineInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.paddingTop
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "Address Line 1",
                                    name: "address_lines",
                                    readOnly: true,
                                    value: customer ? customer.address.lines : '',
                                }}
                                rows={ 4 }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                            <FormLabel>
                                City*
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.paddingTop
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "Your City Name",
                                    name: "city",
                                    readOnly: true,
                                    value: customer ? customer.address.city : '',
                                }}
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
                            <FormLabel>
                                Post Code*
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.paddingTop
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "SDV 21D 5D4 DL",
                                    name: "postcode",
                                    readOnly: true,
                                    value: customer ? customer.address.postcode.value : ''
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default CustomerSection
