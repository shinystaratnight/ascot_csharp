import React, { useState, useEffect } from 'react'
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
import TextField from '@material-ui/core/TextField'
import InstallationSection from "./InstallationSection"
import CustomRadioGroup from "components/CustomRadioGroup/CustomRadioGroup"

import { attendancesRadios } from "variables/dropdown"

import styles from "assets/jss/material-dashboard-pro-react/views/jobStyle.js"

const useStyles = makeStyles(styles)

const JobSection = (props) => {
    
    const { jobData } = props
    
    const [ job, setJob ] = useState({ siteContact: '' })
    useEffect(() => {
        setJob(jobData)
    }, [jobData])

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
                                            name: "site_contact",
                                            readOnly: true,
                                            value: job.siteContact ? job.siteContact : ""
                                        }}
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
                                            name: "site_number",
                                            readOnly: true,
                                            value: job.siteContactPhone ? job.siteContactPhone : ""
                                        }}
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
                                            name: "siteEmail",
                                            readOnly: true,
                                            value: job.siteEmail ? job.siteEmail : ""
                                        }}
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
                                            name: "qs_contact",
                                            readOnly: true,
                                            value: job.qsContact ? job.qsContact : ""
                                        }}
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
                                            name: "qs_number",
                                            readOnly: true,
                                            value: job.qsContactPhone ? job.qsContactPhone : ""
                                        }}
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
                                            name: "qs_email",
                                            readOnly: true,
                                            value: job.qsEmail ? job.qsEmail : ""
                                        }}
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
                                    name: "address_lines",
                                    readOnly: true,
                                    value: job.siteAddress ? job.siteAddress.lines : ''
                                }}
                                rows={ 4 }
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
                                    name: "city",
                                    readOnly: true,
                                    value: job.siteAddress ? job.siteAddress.city : ''
                                }}
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
                                    name: "postcode",
                                    readOnly: true,
                                    value: job.siteAddress ? job.siteAddress.postcode.value : ''
                                }}
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
                            <CustomRadioGroup 
                                title="Offload*" 
                                name="offload" 
                                radioItems={ attendancesRadios } 
                                value={ job.attendanceAgreed ? job.attendanceAgreed.offload + "" : "" }
                                disabled={ true }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <CustomRadioGroup 
                                title="Distribution*" 
                                name="distribution" 
                                radioItems={ attendancesRadios }
                                value={ job.attendanceAgreed ? job.attendanceAgreed.distribution + "" : "" }
                                disabled={ true }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <CustomRadioGroup 
                                title="Plant*" 
                                name="plant" 
                                radioItems={ attendancesRadios } 
                                value={ job.attendanceAgreed ? job.attendanceAgreed.plant + "" : "" }
                                disabled={ true }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <CustomRadioGroup 
                                title="Protection*" 
                                name="protection" 
                                radioItems={ attendancesRadios } 
                                value={ job.attendanceAgreed ? job.attendanceAgreed.protection + "" : "" }
                                disabled={ true }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <CustomRadioGroup 
                                title="Hoisting*" 
                                name="hoisting" 
                                radioItems={ attendancesRadios } 
                                value={ job.attendanceAgreed ? job.attendanceAgreed.hoisting + "" : "" }
                                disabled={ true }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <CustomRadioGroup 
                                title="Power*" 
                                name="power" 
                                radioItems={ attendancesRadios } 
                                value={ job.attendanceAgreed ? job.attendanceAgreed.power + "" : "" }
                                disabled={ true }
                            />
                        </GridItem>
                        <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 4 }>
                            <CustomRadioGroup 
                                title="Parking (on site)*" 
                                name="parkingOnSite" 
                                radioItems={ attendancesRadios } 
                                value={ job.attendanceAgreed ? job.attendanceAgreed.parkingOnSite + "" : "" }
                                disabled={ true }
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
                            <InstallationSection jobData={ jobData } />
                        </GridItem>

                    </GridContainer>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default JobSection
