import React from 'react'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers'

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

function NonDoorLineItem(props) {

    const {
        lineItem
    } = props

    const classes = useStyles()
   
    return (
        <GridItem xs={ 12 }>         
            <GridContainer>                             
                <GridItem xs={ 12 } sm={ 6 } md={ 3 }>
                    <FormLabel>
                    Variant Type *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "text",
                            style: { fontSize: 20 },
                            placeholder: "Variant Type",
                            name: "type",
                            readOnly: true,
                            value: lineItem.nonDoorVariation.type === 0 ? "Non Door Variation" : "Installation Variation"
                        }}                       
                    />
                </GridItem>               
              
                <GridItem xs={ 12 } sm={ 6 } md={ 3 }>
                    <FormLabel>
                        Description *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "text",
                            style: { fontSize: 20 },
                            placeholder: "Description",
                            name: "description",
                            readOnly: true,
                            value: lineItem.nonDoorVariation.description                      
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
               
               
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                    Instructed By *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "text",
                            style: { fontSize: 20 },
                            placeholder: "Instructed By",
                            name: "instructedBy",
                            readOnly: true,
                            value: lineItem.nonDoorVariation.instructedBy                      
                        }}                       
                    />
                </GridItem>
                <GridItem xs={ 12 } sm={ 6 } md={ 3 }>
                    <FormLabel>
                        Instruction Date *
                    </FormLabel>
                    <MuiPickersUtilsProvider utils={ DateFnsUtils }>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            value={ lineItem.nonDoorVariation.instructionDate }                           
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            inputVariant="outlined"
                            fullWidth
                            style={{ marginTop: "4px" }}
                            inputProps={{
                                style: { fontSize: 20 },
                                placeholder: "DD / MM / YYYY",
                                name: "instructionDate",
                            }}                            
                        />  
                    </MuiPickersUtilsProvider>
                </GridItem>                   
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        Ascot Ref *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "text",
                            style: { fontSize: 20 },
                            placeholder: "Ascot Ref",
                            name: "ascotRef",
                            readOnly: true,
                            value: lineItem.nonDoorVariation.ascotRef                      
                        }}                       
                    />
                </GridItem>                 
            </GridContainer>           
            <Divider className={ classes.divider } />
        </GridItem>
    )
}

export default NonDoorLineItem
