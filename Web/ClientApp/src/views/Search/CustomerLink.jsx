import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { withRouter } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Tooltip from '@material-ui/core/Tooltip'

import styles from "assets/jss/material-dashboard-pro-react/views/searchStyle.js"

const useStyles = makeStyles(styles)

function CustomerLink(props) {

    const { name, id, history } = props

    const handleLink = (e) => {
        e.preventDefault()
        history.push(`/new/${ id }`)
    }
    
    const classes = useStyles()
    
    return (
        <Tooltip 
            title={ <p className={ classes.toolTipTitle }>Create new order for<br />{ name }</p> } 
            placement="right-start"
            >
            <Link href="#" onClick={ e => handleLink(e) }>
                { name }
            </Link>
        </Tooltip>
        
    )
}

export default withRouter(CustomerLink)
