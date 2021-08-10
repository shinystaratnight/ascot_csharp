import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import { withRouter } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import Button from "components/CustomButtons/Button.js"

import { order_status_filter_list } from 'variables/dropdown.js'

import styles from "assets/jss/material-dashboard-pro-react/views/orderItemCollapseStyle.js"
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(styles)

function OrderItemHeader(props) {

    const { handleExpandClick, expanded, classeNames, job } = props

    const classes = useStyles()

    return (
        <GridContainer>
            <GridItem xs={ 12 } sm={ 4 } md={ 2 } className={ classes.headerItem }>
                <p>
                    <Link
                        className={ classes.cursorPointer }
                        onClick={ (e) => { e.preventDefault(); props.history.push(`/job/${ job.id.value }`) } }>
                            <span>Job: </span> { job.id.value }
                    </Link>
                    {/*<Button*/}
                    {/*    className={ classes.editBtn }*/}
                    {/*    color="info"*/}
                    {/*    onClick={ (e) => { e.preventDefault(); props.history.push(`/job/${ job.id.value }`) } }>*/}
                    {/*    Job: { job.id.value }*/}
                    {/*</Button>*/}

                </p>
            </GridItem>
            <GridItem xs={ 12 } sm={ 8 } md={ 5 } className={ classes.headerItem }>
                <p>
                    { job.customer.name }
                </p>
            </GridItem>
            <GridItem xs={ 12 } sm={ 4 } md={ 3 } className={ classes.headerItem }>
                <p>
                    { order_status_filter_list.find(item => item.value === job.stage).text }
                </p>
            </GridItem>
            <GridItem xs={ 6 } sm={ 4 } md={ 2 } className={ classes.expandBtn }>
                <IconButton
                    className={ classeNames }
                    onClick={ handleExpandClick }
                    aria-expanded={ expanded }
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </GridItem>
        </GridContainer>
    )
}

export default withRouter(OrderItemHeader)
