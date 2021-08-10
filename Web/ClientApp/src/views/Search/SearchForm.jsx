import React from "react"

import { withRouter } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import FormLabel from "@material-ui/core/FormLabel"
import AddIcon from '@material-ui/icons/Add'

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js"

import styles from "assets/jss/material-dashboard-pro-react/components/searchFormStyle"
import classNames from "classnames"

const useStyles = makeStyles(styles);

function SearchForm(props) {

    const { handleSearch, handleChange } = props
    
    const handleEnterKey = (e) => {
        if (e.charCode === 13) {
            handleChange(e)
            handleSearch()
        }
    }

    const classes = useStyles();

    return (
        <GridContainer className={ classes.searchFormWrapper }>
            <GridItem xs={12} sm={2} md={2} lg={1} className={ classes.marginTop }>
                <FormLabel className={ classNames([ classes.labelHorizontal, classes.searchLabel ]) }>
                    Search: {' '}
                </FormLabel>
            </GridItem>
            <GridItem xs={12} sm={10} md={10} lg={8} className={ classes.marginTop }>
                <CustomInput
                    id="auto-focus"
                    formControlProps={{
                        fullWidth: true,
                        className: classes.searchForm 
                    }}
                    inputProps={{
                        type: "text",
                        style: { fontSize: 20 },
                        placeholder: "Search...",
                        onChange: (e) => handleChange(e),
                        onKeyPress: (e) => handleEnterKey(e)
                    }}       
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={ classes.buttonWrapper }>
              
                <Button size="lg" round className={classes.marginRight} onClick={ handleSearch }>
                    search
                </Button>
                <Button size="lg" round onClick={ () => props.history.push('/new') }>
                    <AddIcon className={ classes.icons } /> new
                </Button>
            </GridItem>
        </GridContainer>
    )
}

export default withRouter(SearchForm)
