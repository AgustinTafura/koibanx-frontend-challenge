import { useState, useContext, useEffect} from 'react'
import Navbar from '../../components/navbar'
import TableStore from '../../components/tableStores'

const Stores = () => {
    const [storesFetched, setStoresFetched] = useState()

    return (
        <div className=''>
            <h1>STORES</h1>
            <Navbar setStoresFetched={setStoresFetched} />
            <TableStore storesFetched={storesFetched} />
                {(storesFetched === undefined) && <div>REALICE UNA BUSQEDA DE COMERCIOS</div>}
                {(storesFetched?.length === 0) && <div>NO SE ENCONTRARON RESULTADOS PARA SU BUSQUEDA</div>}
        </div>
    )
}   

export default Stores
