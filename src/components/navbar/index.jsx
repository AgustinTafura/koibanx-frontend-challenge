
import storesListFromDB from '../../db/stores.json'

const Navbar = (props) => {

    const getStoresFromDB = (e)=>{
        const input = e.target[0].value
        const storeList = []
        const query = `https://api.koibanx.com/stores?q={"$or":[{"id":{"$regex":"${input}"},{"name":{"$regex":"${input}"}},{"cuit":{"$regex":"${input}"}}]}`
        console.log(query)

        e.preventDefault()

        if (input !== '') {

            storesListFromDB.map(store => {
                if(
                    store.id.includes(input)
                    || store.name.toLowerCase().includes(input)
                    || store.cuit.toLowerCase().includes(input)
                ) {
                    storeList.push(store)
                }
            })
        }
        props.setStoresFetched(storeList)

    }
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex" onSubmit={getStoresFromDB}>
                    <input className="form-control me-2" type="search" placeholder="Search by Id, Name, Cuit" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit" >Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar

