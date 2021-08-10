import React, { useEffect, useState } from 'react'

import { makeStyles } from "@material-ui/core/styles"

import SearchIcon from '@material-ui/icons/Search';

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import FormLabel from "@material-ui/core/FormLabel"
import InputAdornment from '@material-ui/core/InputAdornment'
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"

import { order_status_filter_list, line_item_status_filter_list } from "variables/dropdown.js"

import styles from "assets/jss/material-dashboard-pro-react/views/jobListStyle.js"

const useStyles = makeStyles(styles)

function SearchFilter(props) {

    const { 
        handleSearch,
        handleChangeSearchForm,
        handleFilterOrderStatus,
        handleFilterLineItemsStatus,
        searchKey
    } = props

    const [ appendLineItemsStages, setAppendLineItemStages ] = useState([])

    const handleEnterKey = (e) => {
        if (e.charCode === 13) {
            handleSearch()
        }
    }

    useEffect(() => {       
        setAppendLineItemStages([{
            value: 'all',
            text: 'All Statuses'
        }, ...line_item_status_filter_list])
    }, [])

    const classes = useStyles()

    return (
        <GridContainer>
            <GridItem xs={ 12 } sm={ 12 } md={ 5 }>                            
                <FormLabel></FormLabel>
                <CustomInput                                   
                    formControlProps={{
                        fullWidth: true,
                        className: classes.paddingTop
                    }}
                    inputProps={{
                        type: "text",
                        style: { fontSize: 20 },
                        placeholder: "Search for Order",
                        name: "searchKey",
                        onChange: (e) => handleChangeSearchForm(e),
                        onKeyPress: (e) => handleEnterKey(e),
                        value: searchKey
                    }}
                    startAdornment={<InputAdornment position="start"><SearchIcon style={{ color: "grey" }} /></InputAdornment>}
                />                            
            </GridItem>
            <GridItem xs={ 12 } md={ 1 }></GridItem>
            <GridItem xs={ 12 } sm={ 6 } md={ 3 }>
                <FormLabel>
                    Filter by Order Status *
                </FormLabel>
                <CustomDropdown 
                    id="dropdown" 
                    menuList={ order_status_filter_list } 
                    fullWidth
                    name="door_type"
                    classeNames={ classes.dropdown }
                    defaultValue = 'all'
                    handleDropdown={ (e) => handleFilterOrderStatus(e) }
                />
            </GridItem>
            <GridItem xs={ 12 } sm={ 6 } md={ 3 }>
                <FormLabel>
                    Filter by Line Item Status *
                </FormLabel>
                <CustomDropdown 
                    id="dropdown" 
                    menuList={ appendLineItemsStages } 
                    fullWidth
                    name="door_type"
                    classeNames={ classes.dropdown }
                    defaultValue = 'all'
                    handleDropdown={ (e) => handleFilterLineItemsStatus(e) }
                />
            </GridItem>
        </GridContainer>
    )
}

export default SearchFilter
