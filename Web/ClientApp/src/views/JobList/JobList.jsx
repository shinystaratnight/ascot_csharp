import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { makeStyles } from "@material-ui/core/styles"
import SweetAlert from "react-bootstrap-sweetalert"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"

import SearchFilter from "./SearchFilter"
import OrderItemCollapse from "components/JobList/OrderItemCollapse"

import ApiServices from "api/Api.js"

import styles from "assets/jss/material-dashboard-pro-react/views/jobListStyle.js"

const useStyles = makeStyles(styles)

function JobList(props) {

    const [ alert, setAlert ] = React.useState(null)
    const [ jobList, setJobList ] = useState([])
    const [ searchResult, setSearchResult ] = useState([])
    const [ searchKey, setSearchKey ] = useState('')
    const [ jobStage, setJobStage ] = useState('all')
    const [ doorStage, setDoorStage ] = useState('all')

    const [ rerenderView, setRerenderView ] = useState(true)

    const classes = useStyles()

    const handleChangeSearchForm = (e) => {
        setSearchKey(e.target.value)
    }

    const handleSearch = () => {

        if(searchKey === '' || searchKey === undefined) {
            setSearchResult(jobList)
        } else {
            let newFilteredJobList = []
            newFilteredJobList = jobList.filter(item => item.customer.name.toLowerCase().includes(searchKey) === true || 
                item.id.value === searchKey + "")
            setSearchResult(newFilteredJobList)
        }
    }

    const handleFilterOrderStatus = async (e) => {
        
        setJobStage(e.target.value)
        setSearchKey("")
        const res = await ApiServices.getJobsByStatus({ jobStage: e.target.value, doorStage: doorStage})
        if (res.status === 200) {
            setJobList(res.data)
            setSearchResult(res.data)
        }
    }

    const handleFilterLineItemsStatus = async (e) => {
        setDoorStage(e.target.value)
        setSearchKey("")
        const res = await ApiServices.getJobsByStatus({ jobStage: jobStage, doorStage: e.target.value })
        if (res.status === 200) {
            setJobList(res.data)
            setSearchResult(res.data)
        }
    }

    const updateLineItemsStage = async (orderId, lineItemIds, type) => {        
        
 
        if (type === "done") {
            for (var i = 0; i < lineItemIds.length; i++) {
                await ApiServices.putLineItemComplete({ jobId: orderId, lineNumber: lineItemIds[i] })
            }
        } else if (type === "cancelled") {
            for (var i = 0; i < lineItemIds.length; i++) {
                await ApiServices.putLineItemCancelled({ jobId: orderId, lineNumber: lineItemIds[i] })
            }
        }

        await fetchAllJobs()
        toast.success("Successfully updated!")
        if (type === "done") {
            const res = await ApiServices.getJobById(orderId)    
            if (res.status === 200) {                                  
                if (res.data.lineItems.filter(lineItem => lineItem.isDoor ? lineItem.door.stage !== 4 : lineItem.nonDoorVariation.stage !== 4).length === 0) {                                      
                    createAFPAlert(orderId)
                } else if (res.data.lineItems.filter(lineItem => lineItem.isDoor ? lineItem.door.stage !== 5 : lineItem.nonDoorVariation.stage !== 5).length === 0) {                                      
                    createAFPAlert(orderId)
                }
            }
        }
    }

    const addVariantDoor = async (variant, type, orderId) => {       
        if (type === "non_door") {
            const res = await ApiServices.putNonDoorVariation(orderId, variant)
            if (res.status === 201) {
                await fetchAllJobs()
                toast.success("Successfully Added!")
            }
        } else if (type === "door") {
            const res = await ApiServices.putDoorVariation(orderId, variant)
            if (res.status === 201) {
                await fetchAllJobs()
                toast.success("Successfully Added!")
            }
        }       
    }

    const handleRerenderView = () => {
        setRerenderView(!rerenderView)
    }

    const fetchAllJobs = async () => {
        const res = await ApiServices.getJobsByStatus({ jobStage: "all", doorStage: "all"})    
        if (res.status === 200) {                   
            setJobList(res.data)
            setSearchResult(res.data)
        }
    }

    const createAFPAlert = (orderId) => {
        setAlert(
            <SweetAlert
              warning
              style={{ display: "block", marginTop: "-100px" }}
              title="Do you want to create an Application for Payment Now?"
              onConfirm={ () => { hideAlert(); handleCreateAFP(orderId) } }
              onCancel={() => { hideAlert() }}
              confirmBtnCssClass={ classes.button + " " + classes.success + " " + classes.alertButton }
              cancelBtnCssClass={ classes.button + " " + classes.danger + " " + classes.alertButton }
              confirmBtnText="Yes"
              cancelBtnText="Cancel"
              showCancel
            >            
            </SweetAlert>
        )
    }

    const handleCreateAFP = async (orderId) => {
        const afpRes = await ApiServices.createApplicationForPayment(orderId)
        console.log(afpRes)
        if (afpRes.status === 200) {
            toast.success("Successfully Created Application payment")
        }
    }

    useEffect(async () => {        
        await fetchAllJobs()      
    }, [])
    
    const hideAlert = () => {
        setAlert(null);
    }

    return (
        <GridContainer>
            { alert }
            <GridItem xs={12}>
                <Card>
                    <CardHeader color="rose" text>
                        <CardText color="rose">
                            <h4 className={ classes.cardTitle }>List of Jobs</h4>
                        </CardText>
                    </CardHeader>
                    <CardBody>
                        <SearchFilter
                            searchKey={ searchKey }
                            handleSearch={ handleSearch }
                            handleChangeSearchForm={ handleChangeSearchForm }
                            handleFilterOrderStatus={ handleFilterOrderStatus } 
                            handleFilterLineItemsStatus={ handleFilterLineItemsStatus }    
                        />
                        {
                            searchResult.map((job, index) => (
                                <OrderItemCollapse 
                                    key={ index } 
                                    jobData={ job }
                                    updateLineItemsStage={ updateLineItemsStage }
                                    handleRerenderView={ handleRerenderView }
                                    addVariantDoor={ addVariantDoor }
                                />
                            ))
                        }
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    )
}

export default JobList
