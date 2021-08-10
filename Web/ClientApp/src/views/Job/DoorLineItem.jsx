import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import Divider from '@material-ui/core/Divider'
import FormLabel from "@material-ui/core/FormLabel"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"
import CustomInput from "components/CustomInput/CustomInput.js"

import { doorTypeList } from "variables/dropdown.js"

import styles from "assets/jss/material-dashboard-pro-react/components/doorsFormStyle"

const useStyles = makeStyles(styles)

function DoorLineItem(props) {

    const {
        lineItem
    } = props

    const classes = useStyles()
   
    return (
        <GridItem xs={ 12 }>         
            <GridContainer>
                
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        Door Type *
                    </FormLabel>
                    <CustomDropdown 
                        id="dropdown" 
                        menuList={ doorTypeList } 
                        fullWidth
                        name="type"
                        classeNames={ classes.dropdown }
                        defaultValue={ lineItem.door.type }
                        readOnly                     
                        />
                </GridItem>                               
                
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        Width *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "number",
                            style: { fontSize: 20 },
                            placeholder: "Width",
                            name: "width",
                            readOnly: true,
                            value: lineItem.door.width      
                        }}                       
                    />
                </GridItem>
                                
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        Height *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "number",
                            style: { fontSize: 20 },
                            placeholder: "Height",
                            name: "height",
                            readOnly: true,
                            value: lineItem.door.height                     
                        }}                       
                    />
                </GridItem>
                                  
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        Price(Cost) *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop,
                        }}
                        inputProps={{
                            type: "number",
                            style: { fontSize: 20 },
                            placeholder: "Price(Cost)",
                            name: "costPrice",
                            readOnly: true,
                            value: lineItem.isDoor ? lineItem.door.costPrice : lineItem.nonDoorVariation.costPrice                      
                        }}                       
                    />
                </GridItem>
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        Price(Sell) *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "number",
                            style: { fontSize: 20 },
                            placeholder: "Price(Sell)",
                            name: "sellPrice",
                            readOnly: true,
                            value: lineItem.isDoor ? lineItem.door.sellPrice : lineItem.nonDoorVariation.sellPrice                        
                        }}                        
                    />
                </GridItem>
                {
                    lineItem.door.type === 24 ? 
                        <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                            <FormLabel>
                                Other Type Description *
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.paddingTop
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "Other Type Description",
                                    name: "otherTypeDescription",
                                    value: !!(lineItem.door.otherTypeDescription) ? lineItem.door.otherTypeDescription : ""
                                }}                                          
                            />
                        </GridItem>
                        :<></>                                    
                }               
               
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        Colour *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "text",
                            style: { fontSize: 20 },
                            placeholder: "Colour",
                            name: "colour",
                            readOnly: true,
                            value: lineItem.door.colour                                                 
                        }}                      
                    />
                </GridItem>
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        Customer Door Ref *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "text",
                            style: { fontSize: 20 },
                            placeholder: "Customer Door Ref",
                            name: "customerDoorRef",
                            readOnly: true,
                            value: !!(lineItem.door.customerDoorRef) ? lineItem.door.customerDoorRef : ""
                        }}                      
                    />
                </GridItem>
              
                                      
            </GridContainer>           
            <Divider className={ classes.divider } />
        </GridItem>
    )
}

export default DoorLineItem
