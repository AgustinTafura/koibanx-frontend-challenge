import { useState, useContext, useEffect} from 'react'
import Navbar from '../../components/navbar'
import TableStore from '../../components/tableStores'
// import storesDB from '../../db/stores.json'

const Stores = () => {
    const [storesFetched, setStoresFetched] = useState()

    return (
        <div className='container'>
            <h1>STORES</h1>
            <div>{(storesFetched === undefined)? 'treu' : 'false'}</div>
            <Navbar setStoresFetched={setStoresFetched} />
            <TableStore storesFetched={storesFetched} />
                {(storesFetched === undefined) && <div>REALICE UNA BUSQEDA DE COMERCIOS</div>}
                {(storesFetched?.length === 0) && <div>NO SE ENCONTRARON RESULTADOS PARA SU BUSQUEDA</div>}
        </div>
    )
}   

export default Stores
