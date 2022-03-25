import { useState, useContext, useEffect} from 'react'
import Navbar from '../../components/navbar'
import TableStore from '../../components/tableStores'

const Stores = () => {
    const [storesFetched, setStoresFetched] = useState()
    const [rowPerPages, setRowPerPages] = useState()

    return (
        <>
            <h1>STORES</h1>
            <Navbar setStoresFetched={setStoresFetched} setRowPerPages={setRowPerPages} />
            <TableStore storesFetched={storesFetched} rowPerPages={rowPerPages} />
            {(storesFetched === undefined) && <div>REALICE UNA BUSQEDA DE COMERCIOS</div>}
            {(storesFetched?.length === 0) && <div>NO SE ENCONTRARON RESULTADOS PARA SU BUSQUEDA</div>}
        </>
    )
}   

export default Stores
