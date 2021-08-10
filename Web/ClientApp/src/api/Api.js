import axios from "axios"
import http from "./Http"

class ApiServices {
    // remove two methods
    async getAllCustomers() {
        return await http.get('/customers')
    }

    async getAllJobs() {
        return await http.get('/')
    }

    async getJobById(jobId) {
        return await http.get(`/${ jobId }`)
    }

    async getSearchResult(query) {
        return await http.get(`/search/${ query }`)
    }

    async getCustomer(customerId) {
        const res = await http.get(`/customer/${ customerId }`)
        if (res.status === 200) {
            return { customer: res.data, status: 200 }
        }
        return { customer: {}, status: res.status }
    }

    async putCustomer(customer) {
        const res = await http.put(`/customer/${ customer.id }`, customer)
        return res
    }

    async createCustomer(customer) {
        const res = await http.post(`/customer`, customer)
        return res
    }

    async createJob({ customerId, job }) {
        console.log(job)
        const res = await http.post(`/${ customerId }`, job)
        return res
    }

    async addDoors({ jobId, doorData }) {
        const res = await http.post(`/door/${ jobId }`, doorData)
        return res
    }

    async uploadDocuments({ jobId, document}) {
        const formData = new FormData()
        formData.append('file', document)

        const res = await http.post(`/documents/${ jobId }`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }})
        return res
    }

    async getJobsByStatus({ jobStage="all", doorStage="all" }) {
        const res = await http.get(`/filter/${ jobStage }/${ doorStage }`)
        return res
    }

    async deleteJobLine({ jobId, lineItemId }) {
        const res = await http.delete(`/door/${ jobId }/${ lineItemId }`)
        return res
    }

    async putDoorVariation(jobId, door ) {
        const res = await http.post(`/door/${ jobId }/variation`, door)
        return res
    }

    async putNonDoorVariation(jobId, nonDoorVariation) {
        console.log(nonDoorVariation)
        console.log(jobId)
        const res = await http.post(`/non-door/${ jobId }`, nonDoorVariation)
        return res
    }

    async putLineItemStage({ jobId, lineItemId, door }) {
        const res = await http.put(`/door/${ jobId }/${ lineItemId }`, door)
        return res
    }

    async rejectJob(jobId) {
        const res = await http.delete(`/${ jobId }`)
        return res
    }

    async putJobNettOrDiscount({ jobId, nettOrDiscount }) {
        const res = await http.put(`/${ jobId }/net-or-discount`, nettOrDiscount)
        return res
    }

    async putJobQsContact({ jobId, qsContact }) {
        const res = await http.put(`/${ jobId }/qs-contact`, qsContact)
        return res
    }

    async putJobSiteContact({ jobId, siteContact }) {
        const res = await http.put(`/${ jobId }/site-contact`, siteContact)
        return res
    }

    async putJobCreditCheck({ jobId, creditCheckNumber }) {
        const res = await http.put(`/credit-check/${ jobId }/${creditCheckNumber}`)
        return res
    }

    async putLineItemComplete({ jobId, lineNumber }) {
        const res = await http.put(`/door/complete/${ jobId }/${ lineNumber }`)
        return res
    }

    async putLineItemCancelled({ jobId, lineNumber }) {
        const res = await http.put(`/door/cancelled/${ jobId }/${ lineNumber }`)
        return res
    }

    async createApplicationForPayment(jobId) {
        const res = await http.post(`/afp/${ jobId }`)
        return res
    }
}

export default new ApiServices()
