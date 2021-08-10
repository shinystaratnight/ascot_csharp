import React from 'react'

import { makeStyles } from "@material-ui/core/styles"

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"
import FormLabel from "@material-ui/core/FormLabel"
import CustomInput from "components/CustomInput/CustomInput.js"
import MultiLineInput from "components/CustomInput/MultiLineInput.js"

import AttendanceRadios from "./AttendanceRadios"
import InstallationDates from "./InstallationDates"

import styles from "assets/jss/material-dashboard-pro-react/views/jobStyle.js"

const useStyles = makeStyles(styles)

function Job(props) {

    const { enableNewJob, handleJobData, createNewJob, jobFormValidation } = props

    const radioItems=[
        {
            value: "0",
            label: "Ascot"
        },
        {
            value: "1",
            label: "Client"
        },
        {
            value: "2",
            label: "Assist"
        }
    ]

    const classes = useStyles()

    return (
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="rose" text>
                    <CardText color="rose">
                        <h4 className={ classes.cardTitle }>Job</h4>
                    </CardText>
                </CardHeader>
                <CardBody className={ classes.cardBodyPadding }>
                    <form onSubmit={ props.addNewJob }>
                    <GridContainer>
                        <GridItem xs={ 12 }>
                            <fieldset className={ classes.fieldset }>
                                <legend>Site Contact</legend>

                                <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                                    <FormLabel>
                                        Site Contact*
                                    </FormLabel>
                                    <CustomInput                                   
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.paddingTop
                                        }}
                                        inputProps={{
                                            type: "text",
                                            style: { fontSize: 20 },
                                            placeholder: "Site Contact",
                                            disabled: !enableNewJob,
                                            name: "site_contact",
                                            onChange: (e) => handleJobData(e)
                                        }}
                                        error={ !jobFormValidation.site_contact }
                                    />
                                </GridItem>
                                <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                                    <FormLabel>
                                        Site Contact Number*
                                    </FormLabel>
                                    <CustomInput                                   
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.paddingTop
                                        }}
                                        inputProps={{
                                            type: "text",
                                            style: { fontSize: 20 },
                                            placeholder: "Site Contact Number",
                                            disabled: !enableNewJob,
                                            name: "site_number",
                                            onChange: (e) => handleJobData(e)
                                        }}
                                        error={ !jobFormValidation.site_number }
                                    />
                                </GridItem>
                                <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                                    <FormLabel>
                                        Site Contact Email*
                                    </FormLabel>
                                    <CustomInput                                   
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.paddingTop
                                        }}
                                        inputProps={{
                                            type: "text",
                                            style: { fontSize: 20 },
                                            placeholder: "Site Contact Email",
                                            disabled: !enableNewJob,
                                            name: "siteEmail",
                                            onChange: (e) => handleJobData(e)
                                        }}
                                        error={ !jobFormValidation.siteEmail }
                                    />
                                </GridItem>
                            </fieldset>
                        </GridItem>
                        <GridItem xs={ 12 }>
                            <fieldset className={ classes.fieldset }>
                                <legend>QS Contact</legend>
                                <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                                    <FormLabel>
                                        QS Contact*
                                    </FormLabel>
                                    <CustomInput                                   
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.paddingTop
                                        }}
                                        inputProps={{
                                            type: "text",
                                            style: { fontSize: 20 },
                                            placeholder: "QS Contact",
                                            disabled: !enableNewJob,
                                            name: "qs_contact",
                                            onChange: (e) => handleJobData(e)
                                        }}
                                        error={ !jobFormValidation.qs_contact }
                                    />
                                </GridItem>
                                <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                                    <FormLabel>
                                        QS Contact Number*
                                    </FormLabel>
                                    <CustomInput                                   
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.paddingTop
                                        }}
                                        inputProps={{
                                            type: "text",
                                            style: { fontSize: 20 },
                                            placeholder: "QS Contact Number",
                                            disabled: !enableNewJob,
                                            name: "qs_number",
                                            onChange: (e) => handleJobData(e)
                                        }}
                                        error={ !jobFormValidation.qs_number }
                                    />
                                </GridItem>
                                <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                                    <FormLabel>
                                        QS Contact Email*
                                    </FormLabel>
                                    <CustomInput                                   
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.paddingTop
                                        }}
                                        inputProps={{
                                            type: "text",
                                            style: { fontSize: 20 },
                                            placeholder: "QS Contact Email",
                                            disabled: !enableNewJob,
                                            name: "qsEmail",
                                            onChange: (e) => handleJobData(e)
                                        }}
                                        error={ !jobFormValidation.qsEmail }
                                    />
                                </GridItem>
                            
                            </fieldset>
                        </GridItem>
                        
                        
                        <GridItem xs={ 12 }>
                            <FormLabel>
                                Site Address Lines*
                            </FormLabel>
                            <MultiLineInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.paddingTop
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "Site Address Line 1",
                                    disabled: !enableNewJob,
                                    name: "address_lines",
                                    onChange: (e) => handleJobData(e)
                                }}
                                rows={ 4 }
                                error={ !jobFormValidation.address_lines }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 6 } md={ 6 }>
                            <FormLabel>
                                Site Town/City*
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.paddingTop
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "Site Town/City",
                                    disabled: !enableNewJob,
                                    name: "city",
                                    onChange: (e) => handleJobData(e)
                                }}
                                error={ !jobFormValidation.city }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 6 } md={ 6 }>
                            <FormLabel>
                                Site Postcode*
                            </FormLabel>
                            <CustomInput                                   
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.paddingTop
                                }}
                                inputProps={{
                                    type: "text",
                                    style: { fontSize: 20 },
                                    placeholder: "Site Postcode",
                                    disabled: !enableNewJob,
                                    name: "postcode",
                                    onChange: (e) => handleJobData(e)
                                }}
                                error={ !jobFormValidation.postcode }
                            />
                        </GridItem>
                    </GridContainer>
                  
                    <Divider />
                    <GridContainer className={ classes.attendancesWrapper }>
                        <GridItem xs={ 12 }>
                            <Typography variant="h5" gutterBottom className={ classes.groupTitle }>
                                Attendances Agreed
                            </Typography>
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <AttendanceRadios 
                                title="Offload*" 
                                name="offload" 
                                disabled={ !enableNewJob } 
                                radioItems={ radioItems } 
                                handleRadio={ handleJobData }
                                error={ !jobFormValidation.offload }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <AttendanceRadios 
                                title="Distribution*" 
                                name="distribution" 
                                disabled={ !enableNewJob } 
                                radioItems={ radioItems }
                                handleRadio={ handleJobData }
                                error={ !jobFormValidation.distribution }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <AttendanceRadios 
                                title="Plant*" 
                                name="plant" 
                                disabled={ !enableNewJob } 
                                radioItems={ radioItems } 
                                handleRadio={ handleJobData }
                                error={ !jobFormValidation.plant }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <AttendanceRadios 
                                title="Protection*" 
                                name="protection" 
                                disabled={ !enableNewJob } 
                                radioItems={ radioItems } 
                                handleRadio={ handleJobData }
                                error={ !jobFormValidation.protection }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <AttendanceRadios 
                                title="Hoisting*" 
                                name="hoisting" 
                                disabled={ !enableNewJob } 
                                radioItems={ radioItems } 
                                handleRadio={ handleJobData }
                                error={ !jobFormValidation.hoisting }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <AttendanceRadios 
                                title="Power*" 
                                name="power" 
                                disabled={ !enableNewJob } 
                                radioItems={ radioItems } 
                                handleRadio={ handleJobData }
                                error={ !jobFormValidation.power }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <AttendanceRadios 
                                title="Parking (on site)*" 
                                name="parkingOnSite" 
                                disabled={ !enableNewJob } 
                                radioItems={ radioItems } 
                                handleRadio={ handleJobData }
                                error={ !jobFormValidation.parkingOnSite }
                            />
                        </GridItem>
                    </GridContainer>
                    
                    <GridContainer>
                        <GridItem xs={ 12 }>
                            <Typography variant="h5" gutterBottom className={ classes.groupTitle }>
                                Installation Dates(W/C)
                            </Typography>
                        </GridItem>
                        <GridItem xs={12}>
                            <InstallationDates 
                                enableNewJob={ !enableNewJob } 
                                createNewJob={ createNewJob }
                                handleJobData={ handleJobData }
                                jobFormValidation={ jobFormValidation }
                            />
                        </GridItem>

                    </GridContainer>
                    </form>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default Job
