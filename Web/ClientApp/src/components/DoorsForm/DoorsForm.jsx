import React, { useState, useEffect } from 'react'

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

function DoorsForm(props) {

    const { 
        index, 
        handleChange, 
        newDoor, 
        newDoorValidation,
        handleChangeCustomerDoorRef
    } = props
    
    const classes = useStyles()

    const [ doorType, setDoorType ] = useState('')
    const [ noDoors, setNoDoors ] = useState(0)

    const handleChangeDoorType = (e) => {       
        setDoorType(e.target.value)
        handleChange({ e, index })
    }

    const handleChangeNoDoors = (e) => {
        
        handleChange({ e, index })
        setNoDoors(e.target.value)
    }

    const handleChangeRef = ({e, i}) => {        
        handleChangeCustomerDoorRef({e: e, lineItemIndex: index, refIndex: i})
    }

    let customerRefElements = []
    for (let i = 0; i < noDoors; i++) {
        customerRefElements.push(
            <GridItem xs={12} sm={6} md={2} key={ i }>
                <CustomInput                                   
                    formControlProps={{
                        fullWidth: true,
                        className: classes.paddingTop
                    }}
                    inputProps={{
                        type: "text",
                        style: { fontSize: 20 },
                        placeholder: "Customer Door Ref",
                        name: `customerDoorRef${ i }`,
                        onChange: (e) => handleChangeRef({ e, i })
                    }}
                    // error={ newDoor && (!newDoorValidation.customerDoorRefList[i]) }
                    error={ newDoor && (newDoorValidation.customerDoorRefList.length === noDoors ? !newDoorValidation.customerDoorRefList[i] : false) }
                />
            </GridItem>
        )
    }
    
    return (
        <GridItem xs={ 12 }>                    
            <GridContainer>
                <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                    <FormLabel>
                        Door Type *
                    </FormLabel>
                    <CustomDropdown 
                        id="dropdown" 
                        menuList={ doorTypeList } 
                        fullWidth
                        name="type"
                        classeNames={ classes.dropdown }
                        handleDropdown={ (e) => handleChangeDoorType(e) }
                        error={ newDoor && (!newDoorValidation.type) }
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
                            onChange: (e) => handleChange({ e, index })
                        }}
                        error={ newDoor && (!newDoorValidation.width) }
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
                            onChange: (e) => handleChange({ e, index })
                        }}
                        error={ newDoor && (!newDoorValidation.height) }
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
                            onChange: (e) => handleChange({ e, index }),
                        }}
                        error={ newDoor && (!newDoorValidation.costPrice) }
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
                            onChange: (e) => handleChange({ e, index })
                        }}
                        error={ newDoor && (!newDoorValidation.sellPrice) }
                    />
                </GridItem>
                {
                    doorType === 24 ? 
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
                                    onChange: (e) => handleChange({ e, index }),
                                }}   
                                error={ newDoor && (!newDoorValidation.otherTypeDescription) }                
                            />
                        </GridItem>
                        : <></>
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
                            onChange: (e) => handleChange({ e, index })
                        }}
                        error={ newDoor && (!newDoorValidation.colour) }
                    />
                </GridItem>
                <GridItem xs={ 12 } sm={ 6 } md={ 2 }>
                    <FormLabel>
                        No.Doors *
                    </FormLabel>
                    <CustomInput                                   
                        formControlProps={{
                            fullWidth: true,
                            className: classes.paddingTop
                        }}
                        inputProps={{
                            type: "text",
                            style: { fontSize: 20 },
                            placeholder: "No.Doors",
                            name: "no_doors",
                            onChange: (e) => handleChangeNoDoors(e)
                        }}
                        error={ newDoor && (!newDoorValidation.no_doors) }
                    />
                </GridItem>                               
            </GridContainer>
            <GridContainer>
                {
                    noDoors > 0 ?
                        <GridItem xs={ 12 }>
                            <FormLabel>
                                Customer Door Ref *
                            </FormLabel>
                        </GridItem>
                    :<></>
                }
                               
                { customerRefElements }                 
            </GridContainer>           
            <Divider className={ classes.divider } />
        </GridItem>
    )
}

export default DoorsForm
