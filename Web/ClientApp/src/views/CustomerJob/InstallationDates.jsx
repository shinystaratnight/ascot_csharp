import React from 'react'
import Datetime from "react-datetime"
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import { makeStyles } from "@material-ui/core/styles"

import AddIcon from '@material-ui/icons/Add'

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import FormLabel from "@material-ui/core/FormLabel"
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js"
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"

import { areaCodeList } from "variables/dropdown"

import styles from "assets/jss/material-dashboard-pro-react/views/jobStyle"

const useStyles = makeStyles(styles)

function InstallationDates(props) {
    
    const { enableNewJob, createNewJob, handleJobData, jobFormValidation } = props

    const [selectedDate, setSelectedDate] = React.useState(null)

    const handleDateChange = (date) => {
        setSelectedDate(date)
        handleJobData({target: { name: "installationDateWc", value: date }})
    };

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
                            name: "installationDateWc",
                        }}
                        disabled={ enableNewJob }
                        error={ !jobFormValidation.installationDateWc }
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
                        disabled: enableNewJob,
                        name: "numVisits",
                        onChange: (e) => handleJobData(e)
                    }}
                    error={ !jobFormValidation.numVisits }
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
                    disabled={ enableNewJob }
                    handleDropdown={ handleJobData }
                    error={ !jobFormValidation.areaCode }
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
                        disabled: enableNewJob,
                        name: "documents",
                        onChange: (e) => handleJobData(e)
                    }}
                />
            </GridItem>
            <GridItem xs={ 12 } className={ classes.installationBtnGroup }>
                <Button
                    justIcon
                    round
                    className={classes.marginRight}
                    size="lg"
                    disabled={ enableNewJob }
                >
                    <AddIcon className={ classes.icons } />
                </Button>
                <Button 
                    size="lg" 
                    className={ classes.saveBtn } 
                    disabled={ enableNewJob } 
                    onClick={ createNewJob }
                >
                    <AddIcon className={ classes.icons } /> Save New Job
                </Button>
            </GridItem>
        </GridContainer>
    )
}

export default InstallationDates
