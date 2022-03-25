import storesListFromDB from './stores.json'

const backendResponse = (rowsPerPage = 5) => {
    const page = 1
    const total = storesListFromDB.length
    const pages = Math.ceil(total/rowsPerPage)


    const response = {
        data:storesListFromDB,
        page,
        rowsPerPage,
        total,
        pages
    }
    return response
}


export default backendResponse