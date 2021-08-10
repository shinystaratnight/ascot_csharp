import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import AddIcon from '@material-ui/icons/Add'
import FormLabel from "@material-ui/core/FormLabel"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js"

import { variantTypes } from "variables/dropdown"
import {  
    doorTypeList 
} from "variables/dropdown.js"

import {
    initialVariantFormValidation,
    verifyVariantForm
} from "utils/validations"

import styles from "assets/jss/material-dashboard-pro-react/views/orderItemCollapseStyle.js"

const useStyles = makeStyles(styles)

const VariantForm = (props) => {

    const { handleAddVariant } = props

    const [ selectedDate, setSelectedDate ] = useState(null)
    const [ variantForm, setVariantForm ] = useState({variantType: 'non_door_variation'})
    const [ variantType, setVariantType ] = useState('non_door_variation')
    const [ doorType, setDoorType ] = useState('')
    const [ formValidation, setFormValidation ] = useState(initialVariantFormValidation)
    const [ rerenderView, setRerenderView ] = useState(false)

    const handleDateChange = (date) => {
        setSelectedDate(date)
        handleChangeForm({target: { name: "instructionDate", value: date }})
    }

    const handleChangeForm = (e) => {
        setVariantForm(prev => {
            prev[e.target.name] = e.target.value
            return prev
        })        
    }

    const handleVariantType = (e) => {
        handleChangeForm(e)
        setVariantType(e.target.value)
    }

    const handleDoorType = (e) => {
        handleChangeForm(e)
        setDoorType(e.target.value)
    }

    const handleSubmitVariant = (e) => {
        e.preventDefault()
        const { verifyStatus, verifyResult } = verifyVariantForm(variantForm)     
        setFormValidation(verifyResult)
        if (verifyStatus) {
            let variantBody;
            if (variantType === 'non_door_variation' || variantType === 'installation_variation') {
                variantBody = {
                    description: variantForm.description,
                    costPrice: variantForm.costPrice,
                    sellPrice: variantForm.sellPrice,
                    instructedBy: variantForm.instructedBy,
                    instructionDate: variantForm.instructionDate,
                    stage: variantType === 'non_door_variation' ? 0 : 4,
                    ascotRef: variantForm.ascotRef    
                }
                handleAddVariant(variantBody, "non_door")
            } else {
                variantBody = {
                    costPrice: variantForm.costPrice,
                    sellPrice: variantForm.sellPrice,                        
                    stage: 0,
                    type: variantForm.door_type,
                    width: variantForm.width,
                    height: variantForm.height,
                    colour: variantForm.colour,
                    otherTypeDescription: !!(variantForm.otherTypeDescription) ? variantForm.otherTypeDescription : ""
                }
                handleAddVariant(variantBody, "door")
            }
        }
        setRerenderView(!rerenderView)
    }

    const classes = useStyles()

    return (
        <GridContainer className={ classes.variantFormWrapper }>
            <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                <FormLabel>
                    Variant Type *
                </FormLabel>
                <CustomDropdown 
                    menuList={ variantTypes } 
                    fullWidth
                    name="variantType"
                    classeNames={ classes.dropdown }
                    handleDropdown={ (e) => handleVariantType(e) }
                    defaultValue={ variantType }
                    error={ !formValidation.variantType }
                    />
            </GridItem>
            {
                variantType === 'non_door_variation' || variantType === 'installation_variation' ?
                    <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                        <FormLabel>
                            Description *
                        </FormLabel>
                        <CustomInput                                   
                            formControlProps={{
                                fullWidth: true,
                                className: classes.textField
                            }}
                            inputProps={{
                                type: "text",
                                style: { fontSize: 20 },
                                placeholder: "Description",
                                name: "description",
                                onChange: (e) => handleChangeForm(e)
                            }}
                            error={ !formValidation.description }
                        />
                    </GridItem>
                    : <></>
            }
            
            <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                <FormLabel>
                    Cost Price *
                </FormLabel>
                <CustomInput                                   
                    formControlProps={{
                        fullWidth: true,
                        className: classes.textField,
                    }}
                    inputProps={{
                        type: "number",
                        style: { fontSize: 20 },
                        placeholder: "Cost Price",
                        name: "costPrice",
                        onChange: (e) => handleChangeForm(e)
                    }}
                    error={ !formValidation.costPrice }
                />
            </GridItem>
            <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                <FormLabel>
                    Sell Price *
                </FormLabel>
                <CustomInput                                   
                    formControlProps={{
                        fullWidth: true,
                        className: classes.textField
                    }}
                    inputProps={{
                        type: "number",
                        style: { fontSize: 20 },
                        placeholder: "Sell Price",
                        name: "sellPrice",
                        onChange: (e) => handleChangeForm(e)
                    }}
                    error={ !formValidation.sellPrice }
                />
            </GridItem>
            {
                variantType === 'non_door_variation' || variantType === 'installation_variation' ?
                    <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                        <FormLabel>
                            Instructed By *
                        </FormLabel>
                        <CustomInput                                   
                            formControlProps={{
                                fullWidth: true,
                                className: classes.textField
                            }}
                            inputProps={{
                                type: "text",
                                style: { fontSize: 20 },
                                placeholder: "Instructed By",
                                name: "instructedBy",
                                onChange: (e) => handleChangeForm(e)
                            }}
                            error={ !formValidation.instructedBy }
                        />
                    </GridItem>
                    : <></>
            }
            {
                variantType === 'non_door_variation' || variantType === 'installation_variation' ?
                    <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                        <FormLabel>
                            Instruction Date *
                        </FormLabel>
                        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                value={ selectedDate }
                                onChange={ handleDateChange }
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
                                error={ !formValidation.instructionDate }
                            />  
                        </MuiPickersUtilsProvider>
                    </GridItem>
                    : <></>
            }
            {
                variantType === 'non_door_variation' || variantType === 'installation_variation' ?
                    <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                        <FormLabel>
                            Ascot Ref *
                        </FormLabel>
                        <CustomInput                                   
                            formControlProps={{
                                fullWidth: true,
                                className: classes.textField
                            }}
                            inputProps={{
                                type: "text",
                                style: { fontSize: 20 },
                                placeholder: "Ascot Ref",
                                name: "ascotRef",
                                onChange: (e) => handleChangeForm(e)
                            }}                           
                        />
                    </GridItem>
                    : <></>
            }
            {
                variantType === 'new_door_variation' ? 
                    <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                        <FormLabel>
                            Door Type *
                        </FormLabel>
                        <CustomDropdown 
                            menuList={ doorTypeList } 
                            fullWidth
                            name="door_type"
                            classeNames={ classes.dropdown }
                            handleDropdown={ (e) => handleDoorType(e) }
                            error={ !formValidation.door_type }
                            />
                    </GridItem>
                    : <></>
            }
            {
                variantType === 'new_door_variation' && doorType === 24 ?
                    <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                        <FormLabel>
                            Other Type Description *
                        </FormLabel>
                        <CustomInput                                   
                            formControlProps={{
                                fullWidth: true,
                                className: classes.textField
                            }}
                            inputProps={{
                                type: "text",
                                style: { fontSize: 20 },
                                placeholder: "Other Type Description",
                                name: "otherTypeDescription",
                                onChange: (e) => handleChangeForm(e)
                            }}
                            error={ !formValidation.otherTypeDescription }
                        />
                    </GridItem>
                    : <></>
            }
            {
                variantType === 'new_door_variation' ? 
                    <>
                        <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                            <FormLabel>
                                Width *
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textField
                                }}
                                inputProps={{
                                    type: "number",
                                    style: { fontSize: 20 },
                                    placeholder: "Width",
                                    name: "width",
                                    onChange: (e) => handleChangeForm(e)
                                }}
                                error={ !formValidation.width }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                            <FormLabel>
                                Height *
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textField
                                }}
                                inputProps={{
                                    type: "number",
                                    style: { fontSize: 20 },
                                    placeholder: "Height",
                                    name: "height",
                                    onChange: (e) => handleChangeForm(e)
                                }}
                                error={ !formValidation.height }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                            <FormLabel>
                                Colour *
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textField
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "Colour",
                                    name: "colour",
                                    onChange: (e) => handleChangeForm(e)
                                }}
                                error={ !formValidation.colour }
                            />
                        </GridItem>
                    </>
                    : <></>
            }
            <GridItem xs={12} md={2} className={ classes.variantBtnWrapper }>
                <Button 
                    color="info" 
                    size="lg" 
                    className={ classes.variantBtn }
                    onClick={ (e) => handleSubmitVariant(e) }                                
                >
                    <AddIcon className={ classes.icons } /> Submit Variant
                </Button>
            </GridItem>
        </GridContainer>
    )
}

export default VariantForm
