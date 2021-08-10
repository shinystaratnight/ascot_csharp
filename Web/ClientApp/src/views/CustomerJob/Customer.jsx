import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"

import AddIcon from '@material-ui/icons/Add'
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"
import FormLabel from "@material-ui/core/FormLabel"
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js"
import MultiLineInput from "components/CustomInput/MultiLineInput.js"

import styles from "assets/jss/material-dashboard-pro-react/views/customerStyle.js"

import { 
    initialCustomerFormValidation,
    verifyCustomerForm,
} from "utils/validations.js"

const useStyles = makeStyles(styles)

function Customer (props) {

    const { 
        handleAddCustomer, 
        customerData,
    } = props

    const { customerId } = useParams()

    const [ name, setName ] = useState('')
    const [ city, setCity ] = useState('')
    const [ postcode, setPostcode ] = useState('')
    const [ address_lines, setAddressLInes ] = useState('')

    const [ customerValidation, setCustomerValidation ] = useState(initialCustomerFormValidation)

    useEffect(() => {
        setName(customerData.name !== undefined ? customerData.name : '')
        setCity(customerData.city !== undefined ? customerData.city : '')
        setPostcode(customerData.postcode !== undefined ? customerData.postcode : '')
        setAddressLInes(customerData.address_lines !== undefined ? customerData.address_lines : '')        
    }, [customerData])

    const handleAddCustomerBtn = (e) => {
        e.preventDefault()
        
        const newCustomer = {
            "name": name,
            "city": city,
            "postcode": postcode,
            "address_lines": address_lines,            
        }

        const { verifyStatus, verifyResult } = verifyCustomerForm(newCustomer)
     
        setCustomerValidation(verifyResult)
        
        if (verifyStatus) {
            handleAddCustomer(newCustomer)
        }
    }

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
                                    name: "name",
                                    value: name,
                                    onChange: e => setName(e.target.value),
                                    readOnly: customerId === undefined ? false : true
                                }}
                                error={ !customerValidation.name }
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
                                    value: address_lines,
                                    onChange: (e) => setAddressLInes(e.target.value),
                                    readOnly: customerId === undefined ? false : true
                                }}
                                rows={ 4 }
                                error={ !customerValidation.address_lines }
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
                                    value: city,
                                    onChange: (e) => setCity(e.target.value),
                                    readOnly: customerId === undefined ? false : true
                                }}
                                error={ !customerValidation.city }
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
                                    value: postcode,
                                    onChange: (e) => setPostcode(e.target.value),
                                    readOnly: customerId === undefined ? false : true
                                }}
                                error={ !customerValidation.postcode }
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={ 12 } md={ 12 } className={ classes.buttonGroup }>
                            {
                                customerId === undefined ? 
                                <Button 
                                    color="white" 
                                    size="lg" 
                                    className={ classes.marginRight }
                                    onClick={ (e) => handleAddCustomerBtn(e) }
                                >
                                    <AddIcon className={ classes.icons } /> ADD CUSTOMER
                                </Button>
                                :   
                                <Button 
                                    size="lg" 
                                    className={ classes.marginRight }
                                    onClick={ (e) => handleAddCustomerBtn(e) }
                                >
                                    CONFIRM CUSTOMER
                                </Button>
                            }
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default Customer
