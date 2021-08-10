import React, { useState, useEffect } from 'react'

import { makeStyles } from "@material-ui/core/styles"

import FormLabel from "@material-ui/core/FormLabel"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import CustomRadioGroup from "components/CustomRadioGroup/CustomRadioGroup"

import styles from "assets/jss/material-dashboard-pro-react/components/doorsFormStyle"

const useStyles = makeStyles(styles)

function CheckDoorsForm(props) {

    const {        
        doorDataList,
        handleChangeCheckForm,
        nettOrDiscountValidation
    } = props

    const classes = useStyles()

    const [ totalCostPrice, setTotalCostPrice ] = useState("")
    const [ totalSellPrice, setTotalSellPrice ] = useState("")
    const [ correctPrice, setCorrectPrice ] = useState("")
    const [ nettOrDiscount, setNettOrDiscount ] = useState("")
    const [ discount, setDiscount ] = useState("")
    const [ otherDiscount, setOtherDiscount ] = useState("")

    const is_total_price_correct_radios = [
        {
            value: 'yes',
            label: 'Yes'
        },
        {
            value: 'no',
            label: 'No'
        }
    ]
    const nett_less_discount_radios = [
        {
            value: 'nett',
            label: 'NETT'
        },
        {
            value: 'less',
            label: 'LESS'
        }
    ]

    const discount_list = [
        {
            value: '2.5',
            text: '2.5%'
        },
        {
            value: '5',
            text: '5%'
        },
        {
            value: 'other',
            text: 'Other'
        }
    ]
        
    const setTotalPrices = () => {
        let total_cost_price = 0
        let total_sell_price = 0
        if (doorDataList.length > 0) {
            doorDataList.forEach(lineItem => {
                total_cost_price += lineItem.costPrice !== "" ? parseInt(lineItem.costPrice) * parseInt(lineItem.no_doors) : 0
                total_sell_price += lineItem.sellPrice !== "" ? parseInt(lineItem.sellPrice) * parseInt(lineItem.no_doors) : 0
            });
            setTotalCostPrice(total_cost_price === 0 ? "" : total_cost_price)
            setTotalSellPrice(total_sell_price === 0 ? "" : total_sell_price)
        }   
    }    

    useEffect(() => {
        setTotalPrices()
    }, [doorDataList])

    

    return (
        <GridContainer>
            <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                <FormLabel>
                    Total Price(Cost) *
                </FormLabel>
                <CustomInput                                   
                    formControlProps={{
                        fullWidth: true,
                        className: classes.paddingTop
                    }}
                    inputProps={{
                        type: "text",
                        style: { fontSize: 20 },
                        placeholder: "Total Price(Cost)",
                        name: "total_price_cost",
                        readOnly: true,
                        value: totalCostPrice
                    }}                  
                />
            </GridItem>
            <GridItem xs={ 12 } sm={ 6 } md={ 4 }>
                <FormLabel>
                    Total Price(Sell) *
                </FormLabel>
                <CustomInput                                   
                    formControlProps={{
                        fullWidth: true,
                        className: classes.paddingTop
                    }}
                    inputProps={{
                        type: "text",
                        style: { fontSize: 20 },
                        placeholder: "Total Price(Sell)",
                        name: "total_price_sell",
                        readOnly: true,
                        value: totalSellPrice
                    }}                   
                />
            </GridItem>
            <GridItem md={ 12 } lg={ 4 }></GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
                <CustomRadioGroup 
                    title="Is Total Price Correct? *" 
                    name="total_price_correct" 
                    radioItems={ is_total_price_correct_radios } 
                    handleRadio={ (e) => { handleChangeCheckForm(e); setCorrectPrice(e.target.value) } }
                    error={ !nettOrDiscountValidation.total_price_correct }
                />
            </GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
                <CustomRadioGroup 
                    title="Is this NETT or Less Discount?*" 
                    name="nett_less_discount" 
                    radioItems={ nett_less_discount_radios } 
                    handleRadio={ (e) => { handleChangeCheckForm(e); setNettOrDiscount(e.target.value) } }
                    error={ !nettOrDiscountValidation.nett_less_discount }
                />
            </GridItem>
            {
                nettOrDiscount === 'less' ? 
                    <GridItem xs={ 12 } sm={ 6 } md={ 6 } lg={ 3 }>
                        <FormLabel>
                            Discount *
                        </FormLabel>
                        <CustomDropdown 
                            menuList={ discount_list } 
                            fullWidth
                            name="discount"
                            classeNames={ classes.dropdown }
                            handleDropdown={ (e) => { handleChangeCheckForm(e); setDiscount(e.target.value) } }
                            error={ !nettOrDiscountValidation.discount }        
                            />
                    </GridItem>
                    : <></>
            }
            {
                discount === "other" ? 
                    <GridItem xs={ 12 } sm={ 6 } md={ 6 } lg={ 3 } >
                        <FormLabel>
                            Other Discount *
                        </FormLabel>
                        <CustomInput                                   
                            formControlProps={{
                                fullWidth: true,
                                className: classes.paddingTop
                            }}
                            inputProps={{
                                type: "text",
                                style: { fontSize: 20 },
                                placeholder: "Other Discount",
                                name: "other_discount",
                                onChange: (e) => { handleChangeCheckForm(e); setOtherDiscount(e.target.value) }
                            }}
                            error={ !nettOrDiscountValidation.other_discount }
                        />
                    </GridItem>
                    : <></>
            }
            
        </GridContainer>
    )
}

export default CheckDoorsForm
