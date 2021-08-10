import React, { useState, useMemo } from "react"
import { withRouter } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import Link from '@material-ui/core/Link'
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import SearchForm from "./SearchForm"
import SearchTable from "./SearchTable"
import SnackbarContent from "components/Snackbar/SnackbarContent.js"
import CustomerLink from "views/Search/CustomerLink"

import ApiServices from 'api/Api.js'

import styles from "assets/jss/material-dashboard-pro-react/views/searchStyle.js"

import { 
    LEFT_TABLE_COLUMNS, 
    RIGHT_TABLE_COLUMNS,  
    actionButtons 
} from "variables/tableData"
    
import { order_status_filter_list } from "variables/dropdown"

const useStyles = makeStyles(styles)

function Search(props) {

    const [ customersTableData, setCustomersTableData ] = useState([])
    const [jobsTableData, setJobsTableData] = useState([])

    const [searchKey, setSearchKey] = useState("")
    const [snackBar, setSnackBar] = useState(null)

    const handleSearch = async () => {

        if (searchKey == null || searchKey == "") {
            setCustomersTableData([])
            setJobsTableData([])
            return
        }

        const res = await ApiServices.getSearchResult(searchKey.replaceAll(" ", "").toLowerCase())
                
        var customers_data = []
        var jobs_data = []

        if (res.status === 200) {
            for (var i = 0; i < res.data.customers.length; i++) {
                let item = res.data.customers[i]
                let date = item.jobs === null ? "" : new Date(item.jobs[item.jobs.length - 1].createdOn)
                
                customers_data.push({ 
                    "name": item.name, 
                    "customer_name": <CustomerLink name={ item.name } id={ item.id } />,
                    "last_job": item.jobs === null ? 
                        "" : 
                        <Link 
                            className={ classes.cursorPointer }
                            onClick={ e => { e.preventDefault(); props.history.push(`/job/${ item.jobs[item.jobs.length - 1].id.value }`)} }>
                           { `${ item.jobs[item.jobs.length - 1].siteAddress.city }, ${ date.toDateString() }` }
                        </Link>
                })
            }
            setCustomersTableData(customers_data)

            for (var i = 0; i < res.data.jobs.length; i++) {
                let job_item = res.data.jobs[i]
                jobs_data.push({
                    "job_id": <Link 
                                className={ classes.cursorPointer } 
                                onClick={ e => { e.preventDefault(); props.history.push(`/job/${ job_item.id }`)} }
                                >
                                    { job_item.id }
                                </Link>,
                    "customer_name": job_item.customerName,
                    "site": job_item.site1Line,
                    "stage": order_status_filter_list.find(item => item.value === job_item.stage).text,
                    "description": actionButtons
                })
            }
            setJobsTableData(jobs_data)

            if ((customers_data.length == 0) & (jobs_data.length == 0)) {
                errorSnackBar()
            }
            if (customers_data.length > 0 || jobs_data.length > 0) {
                hideSnackBar()
            }
        }
    }

    const handleChange = (e) => {
        setSearchKey(e.target.value)
    }

    const errorSnackBar = () => {
        setSnackBar(
            <SnackbarContent
                message={
                    'No matching customers or jobs'
                }
                color="rose"
            />
        )
    }

    const hideSnackBar = () => {
        setSnackBar(null)
    }

    const leftColumns = useMemo(() => LEFT_TABLE_COLUMNS, [])
    const secondColumns= useMemo(() => RIGHT_TABLE_COLUMNS, [])

    const classes = useStyles();

    return (
        <div>
            <SearchForm handleSearch={ handleSearch } handleChange={ handleChange }/>
            { snackBar }
            <GridContainer>
                <GridItem xs={12} lg={5}>
                    <SearchTable columns={ leftColumns } data={ customersTableData } />
                </GridItem>
                <GridItem xs={12} lg={7}>
                    <SearchTable columns={ secondColumns } data={ jobsTableData } />
                </GridItem>
            </GridContainer>

        </div>
    )
}

export default withRouter(Search)
