import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import styles from "assets/jss/material-dashboard-pro-react/views/customerJobStyle.js"

import { 
    initialNewJobFormValidation,
    initialNewDoorFormValidation,
    verifyNewJobForm,
    verifyNewDoorForm
} from "utils/validations.js"

import GridContainer from "components/Grid/GridContainer.js"
import Customer from "./Customer"
import Job from "./Job"
import Doors from "./Doors"

import ApiServices from "api/Api.js"

const useStyles = makeStyles(styles)

function CustomerJob() {

    const { customerId } = useParams()

    const [ enableNewJob, setEnableNewJob ] = useState(false)
    const [ customerData, setCustomerData ] = useState({})
   
    const [ jobData, setJobData ] = useState({})
    const [ documentFile, setDocumentFile ] = useState(undefined)

    const [ jobFormValidation, setJobFormValidation ] = useState(initialNewJobFormValidation)
    const [ newCustomerId, setNewCustomerId ] = useState('')

    const [ newJobId, setNewJobId ] = useState('')
    const [ enableCreateDoor, setEnablecreateDoor ] = useState(false)

    const classes = useStyles()

    useEffect(async () => {
        if (customerId !== undefined) {
            const { customer, status } = await ApiServices.getCustomer(customerId)
            if (status === 200) {
                setCustomerData({
                    "id": customer.id,
                    "name": customer.name,
                    "city": customer.address.city,
                    "postcode": customer.address.postcode.value,
                    "address_lines": customer.address.lines
                })
            }
        }
    }, [])
 
    const handleAddCustomer = async (customer) => {
        setCustomerData(customer)

        let newCustomer = {
            "name": customer.name,
            "address": {
                "lines": customer.address_lines,
                "city": customer.city,
                "postcode": {
                    "value": customer.postcode
                }
            }
        }

        if (customerId !== undefined) {
            newCustomer['id'] = customerId
            const result = await ApiServices.putCustomer(newCustomer)            
            if (result.status === 201) {
                toast.success("Successfully Confirmed!")
                setNewCustomerId(result.data.id)
                setEnableNewJob(true)
            }
        } else {
            const result = await ApiServices.createCustomer(newCustomer)            
            if (result.status === 201) {
                toast.success("Successfully Created!")
                setNewCustomerId(result.data.id)
                setEnableNewJob(true)
            }
        }
    }
    

    const handleJobData = (e) => {
        setJobData(prev => {
            prev[e.target.name] = e.target.value
            if (e.target.name === "documents") {
                setDocumentFile(e.target.files[0])
            }
            return prev
        })
    }

    const addNewJob = async () => {
        const { verifyStatus, verifyResult } = verifyNewJobForm(jobData)
        setJobFormValidation(verifyResult)
        
        if (verifyStatus) {
            const postData = {
                "id": {
                    "value": ""
                },
                "siteContact": jobData.site_contact,
                "siteContactPhone": jobData.site_number,
                "siteEmail": jobData.siteEmail ? jobData.siteEmail : "",
                "siteAddress": {
                    "lines": jobData.address_lines,
                    "city": jobData.city,
                    "postcode": {
                        "value": jobData.postcode
                    }
                },
                "qsContact": jobData.qs_contact,
                "qsContactPhone": jobData.qs_number,
                "qsEmail": jobData.qsEmail ? jobData.qsEmail : "",
                "attendanceAgreed": {
                    "offload": parseInt(jobData.offload),
                    "distribution": parseInt(jobData.distribution),
                    "plant": parseInt(jobData.plant),
                    "protection": parseInt(jobData.protection),
                    "hoisting": parseInt(jobData.hoisting),
                    "power": parseInt(jobData.power),
                    "parkingOnSite": parseInt(jobData.parkingOnSite),
                },
                "numVisits": parseInt(jobData.numVisits),
                "areaCode": jobData.areaCode,
                "installationDateWc": jobData.installationDateWc,
            }
           
            let res = await ApiServices.createJob({customerId: newCustomerId, job: postData})
            if (res.status === 201) {
                toast.success("Successfully Job Added!")
                setNewJobId(res.data.id.value)
                setEnablecreateDoor(true)
                if (documentFile !== undefined) {                    
                    let doc_res = await ApiServices.uploadDocuments({jobId: res.data.id.value, document: documentFile})
                }                
            }
        }
    }

    /*******************
     * handle doors part
     * *******************/
    const initialDoorData = {
        type: '',
        other_type_description: '',
        width: '',
        height: '',
        costPrice: '',
        sellPrice: '',
        colour: '',
        no_doors: '',
        customerDoorRefList: []        
    }

    const [doorDataList, setDoorDataList] = useState([])    
    const [ newDoorValidation, setNewDoorValidation ] = useState(initialNewDoorFormValidation)

    useEffect(() => {
        if (doorDataList.length === 0) {
            setDoorDataList([...doorDataList, initialDoorData])
        }
    }, [])

    const handleChangeDoorForm = ({ e, index }) => {
        e.preventDefault()
        if ((index + 1) === doorDataList.length) {           
            setDoorDataList(prev => {
               
                prev[index][e.target.name] = e.target.value
                if (e.target.name === 'no_doors') {                
                    if (prev[index]['customerDoorRefList'].length === 0) {
                        prev[index]['customerDoorRefList'] = new Array(e.target.value)
                    } else if (prev[index]['customerDoorRefList'].length > e.target.value) {
                        prev[index]['customerDoorRefList'].splice(e.target.value, prev[index]['customerDoorRefList'].length - e.target.value)
                    } else if (prev[index]['customerDoorRefList'].length < e.target.value) {
                        for (let i = 0; i < (e.target.value - prev[index]['customerDoorRefList'].length); i++) {
                            prev[index]['customerDoorRefList'].push("")
                        }
                    }
                }
                return prev
            })  
        }       
    }

    const handleChangeCustomerDoorRef = ({ e, lineItemIndex, refIndex }) => {
        console.log(`line item index ${ lineItemIndex } ref index = ${ refIndex }`)
        if ((lineItemIndex + 1) === doorDataList.length) {           
            setDoorDataList(prev => {
                prev[lineItemIndex]['customerDoorRefList'][refIndex] = e.target.value
                return prev
            })
        }
        console.log("_____________________")
        console.log(doorDataList)
    }  

    const handleConfirmDoor = async () => {
        const { status, verifyResult } = verifyNewDoorForm(doorDataList[doorDataList.length - 1])
        console.log(status)
        console.log(verifyResult)
        setNewDoorValidation(verifyResult)
        if (status && (newJobId !== "")) {                       
            // const res = await ApiServices.addDoors({jobId: newJobId, doorData: doorDataList[doorDataList.length - 1]})
            // console.log(res)
            setDoorDataList([...doorDataList, initialDoorData])
        }
    }   
    
    return (
        <GridContainer>
            <Customer 
                customerData={ customerData } 
                handleAddCustomer={ handleAddCustomer }
                customerId={ newCustomerId }
            />
            <Job 
                enableNewJob={ enableNewJob } 
                handleJobData={ handleJobData }
                createNewJob={ addNewJob }
                jobFormValidation={ jobFormValidation }
                addNewJob={ addNewJob }
            />
            <Doors
                doorDataList={ doorDataList } 
                handleConfirmDoor={ handleConfirmDoor } 
                handleChangeDoorForm = { handleChangeDoorForm }
                newDoorValidation={ newDoorValidation }
                enableCreateDoor={ enableCreateDoor }
                newJobId={ newJobId } 
                handleChangeCustomerDoorRef={ handleChangeCustomerDoorRef }               
            />
        </GridContainer>
    )
}

export default CustomerJob
