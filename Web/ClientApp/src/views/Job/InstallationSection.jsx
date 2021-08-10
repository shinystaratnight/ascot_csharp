import React, { useEffect, useState } from 'react'
import Datetime from "react-datetime"
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import { makeStyles } from "@material-ui/core/styles"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import FormLabel from "@material-ui/core/FormLabel"
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js"
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"

import { areaCodeList } from "variables/dropdown"

import styles from "assets/jss/material-dashboard-pro-react/views/jobStyle"

const useStyles = makeStyles(styles)

const InstallationSection = (props) => {

    const { jobData } = props

    const [ job, setJob ] = useState({})
    const [ selectedDate, setSelectedDate ] = React.useState(null);
    
    useEffect(() => {
        if (jobData.id !== null) {
            setJob(jobData)
            setSelectedDate(jobData.installationDateWc)
        }
    }, [jobData])

    const classes = useStyles()

    return (
        <GridContainer>
            <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                <FormLabel>
                    Date 1*
                </FormLabel>
                <MuiPickersUtilsProvider utils={ DateFnsUtils }>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        value={ selectedDate }
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        inputVariant="outlined"
                        fullWidth
                        onChange={ () => {} }
                        style={{ marginTop: "4px" }}
                        inputProps={{
                            style: { fontSize: 20 },
                            placeholder: "DD / MM / YYYY",
                            name: "installationDateWc",
                            readOnly: true 
                        }}
                    />  
                </MuiPickersUtilsProvider>
            </GridItem>            
            <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                <FormLabel>
                    No. Visits*
                </FormLabel>
                <CustomInput                                   
                    formControlProps={{
                        fullWidth: true,
                        className: classes.paddingTop
                    }}
                    inputProps={{
                        type: "number",
                        style: { fontSize: 20 },
                        placeholder: "No. Visits",
                        name: "numVisits",
                        readOnly: true,
                        value: job.numVisits !== undefined ? job.numVisits : ""
                    }}
                />
            </GridItem>

            <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                <FormLabel>
                    Area Code*
                </FormLabel>
                <CustomDropdown 
                    id="dropdown" 
                    menuList={ areaCodeList } 
                    fullWidth
                    name="areaCode"
                    classeNames={ classes.dropdown }
                    defaultValue={ job ? job.areaCode : "" }
                    readOnly
                    />
            </GridItem>
            <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                <FormLabel>
                    Documents*
                </FormLabel>
                <CustomInput                                   
                    formControlProps={{
                        fullWidth: true,
                        className: classes.paddingTop
                    }}
                    inputProps={{
                        type: "file",
                        style: { fontSize: 20 },
                        placeholder: "Documents",
                        name: "documents",
                        readOnly: true,
                        disabled: true
                    }}
                />
            </GridItem>
        </GridContainer>
    )
}

export default InstallationSection
