import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"
import SnackbarContent from "components/Snackbar/SnackbarContent.js"

import styles from "assets/jss/material-dashboard-pro-react/views/colourPaletteStyle.js"

const useStyles = makeStyles(styles);

function ColourPalette() {

    const classes = useStyles();

    return (
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="rose" text>
                    <CardText color="rose">
                        <h4 className={classes.cardTitle}>Colour Palette</h4>
                    </CardText>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'Primary - This is a regular notification made with color="primary"'
                                }
                                color="primary"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'ORANGE - This is a regular notification made with color="orange"'
                                }
                                color="orange"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'GRAY - This is a regular notification made with color="gray"'
                                }
                                color="gray"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'BLACK - This is a regular notification made with color="black"'
                                }
                                color="black"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'WHITE - This is a regular notification made with color="white"'
                                }
                                color="white"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'INFO - This is a regular notification made with color="info"'
                                }
                                color="info"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'SUCCESS - This is a regular notification made with color="success'
                                }
                                color="success"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'WARNING - This is a regular notification made with color="warning"'
                                }
                                color="warning"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'DANGER - This is a regular notification made with color="danger"'
                                }
                                color="danger"
                            />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                            <SnackbarContent
                                message={
                                    'ROSE - This is a regular notification made with color="rose"'
                                }
                                color="rose"
                            />
                        </GridItem>
                        
                    </GridContainer>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default ColourPalette
