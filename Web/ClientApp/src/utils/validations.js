export const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true
    }
    return false
};

export const verifyPostCode = value => {
    var postcodeRex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
    if (postcodeRex.test(value)) {
        return true
    }
    return false
}

export const verifyString = value => {
    if (value === undefined || value === null) {
        return false
    }
    if (value.length === 0) {
        return false
    }
    return true
}
export const verifyNumber = value => {
    if (value === undefined || value === null || value === '' || value.includes('.')) {
        return false
    }
    return true
}

export const initialCustomerFormValidation = {
    name: true,
    city: true,
    postcode: true,
    address_lines: true,
}

export const verifyCustomerForm = customer => {
    let verifyResult = {
        name: verifyString(customer.name),
        city: verifyString(customer.city),
        postcode: verifyString(customer.postcode),
        address_lines: verifyString(customer.address_lines),
    }

    let verifyStatus = false
    if(verifyString(customer.name) & verifyString(customer.city) 
        & verifyString(customer.postcode) & verifyString(customer.address_lines)) 
    {
        verifyStatus = true
    }

    return { verifyStatus, verifyResult }
}

export const initialNewJobFormValidation = {
    address_lines: true, areaCode: true, city: true, installationDateWc: true, distribution: true,
    hoisting: true, offload: true, parkingOnSite: true,
    plant: true, postcode: true, power: true, protection: true,
    qs_contact: true, qs_number: true, site_contact: true,
    site_number: true, numVisits: true, siteEmail: true, qsEmail: true
}

export const verifyNewJobForm = newJob => {
    let verifyResult = {
        address_lines: verifyString(newJob.address_lines),
        areaCode: verifyString(newJob.areaCode),
        city: verifyString(newJob.city),
        installationDateWc: verifyString(newJob.installationDateWc),
        distribution: verifyString(newJob.distribution),
        hoisting: verifyString(newJob.hoisting),
        offload: verifyString(newJob.offload),
        parkingOnSite: verifyString(newJob.parkingOnSite),
        plant: verifyString(newJob.plant),
        postcode: verifyString(newJob.postcode),
        power: verifyString(newJob.power),
        protection: verifyString(newJob.protection),
        qs_contact: verifyString(newJob.qs_contact),
        qs_number: verifyString(newJob.qs_number),
        site_contact: verifyString(newJob.site_contact),
        site_number: verifyString(newJob.site_number),
        numVisits: verifyString(newJob.numVisits),
        siteEmail: verifyString(newJob.siteEmail) ? verifyEmail(newJob.siteEmail) : true,
        qsEmail: verifyString(newJob.qsEmail) ? verifyEmail(newJob.qsEmail) : true
    }

    let verifyStatus = true

    for (const [key, val] of Object.entries(verifyResult)) {
        if (val === false) {
            verifyStatus = false
        }
    }

    return { verifyStatus, verifyResult }
}

export const initialNewDoorFormValidation = {
    type: true, otherTypeDescription: true, width: true, height: true,
    costPrice: true, sellPrice: true, colour: true, no_doors: true, customerDoorRefList: [] 
}

export const verifyNewDoorForm = newDoor => {
    let verifyResult = {
        type: verifyString(newDoor.type),       
        width: verifyNumber(newDoor.width),
        height: verifyNumber(newDoor.height),
        costPrice: verifyString(newDoor.costPrice),
        sellPrice: verifyString(newDoor.sellPrice),
        colour: verifyString(newDoor.colour),
        no_doors: verifyString(newDoor.no_doors),
        otherTypeDescription: newDoor.type === 24 ? verifyString(newDoor.otherTypeDescription) : true,
        customerDoorRefList: []   
    }

    let customerDoorRefListValidation = new Array(newDoor.no_doors)
 
    for (let i = 0; i < newDoor.no_doors; i++) {       
        console.log(newDoor.customerDoorRefList[i]) 
        customerDoorRefListValidation[i] = verifyString(newDoor.customerDoorRefList[i])
    }

    verifyResult["customerDoorRefList"] = customerDoorRefListValidation
    let status = true
    for (const [key, val] of Object.entries(verifyResult)) {
        if (key !== "customerDoorRefList") {
            if (val === false) {
                status = false
            }
        }        
    }    
    if (verifyResult.customerDoorRefList.includes(false)) {
        status = false
    }
    return { status, verifyResult }
}

export const initialNettOrDiscountValidation = {
    total_price_correct: true, nett_less_discount: true, discount: true, other_discount: true
}

export const verifyNettOrDiscountForm = (nettOrDiscount) => {
    let verifyResult = {
        total_price_correct: nettOrDiscount.total_price_correct === "yes" ? true : false,            
        nett_less_discount: verifyNumber(nettOrDiscount.nett_less_discount),
        discount: nettOrDiscount.nett_less_discount === "less" ? verifyString(nettOrDiscount.discount) : true,
        other_discount: (nettOrDiscount.nett_less_discount === "less") && (nettOrDiscount.discount === "other") ? verifyString(nettOrDiscount.other_discount) : true         
    }

    let status = true
    for (const [key, val] of Object.entries(verifyResult)) {
        if (val === false) {
            status = false
        }
    }    
  
    return { status, verifyResult }
}

export const initialVariantFormValidation = {
    variantType: true, description: true, costPrice: true, sellPrice: true,
    instructedBy: true, instructionDate: true, door_type: true,
    otherTypeDescription: true, width: true, height: true, colour: true
}

export const verifyVariantForm = newVariant => {
  
    let verifyResult = initialVariantFormValidation
    verifyResult.variantType = verifyString(newVariant.variantType)
    verifyResult.costPrice = verifyString(newVariant.costPrice)
    verifyResult.sellPrice = verifyString(newVariant.sellPrice)
    
    if (newVariant.variantType === 'new_door_variation') {
        verifyResult.width = verifyString(newVariant.width)
        verifyResult.door_type = verifyString(newVariant.door_type)
        verifyResult.height = verifyString(newVariant.height)
        verifyResult.colour = verifyString(newVariant.colour)
        verifyResult.otherTypeDescription = newVariant.door_type === 24 ? verifyString(newVariant.otherTypeDescription) : true        
    } else {        
        verifyResult.description = verifyString(newVariant.description)
        verifyResult.instructedBy = verifyString(newVariant.instructedBy)
        verifyResult.instructionDate = verifyString(newVariant.instructionDate)
    }
    let verifyStatus = true

    for (const [key, val] of Object.entries(verifyResult)) {
        if (val === false) {
            verifyStatus = false
        }
    }

    return { verifyStatus, verifyResult }
}
