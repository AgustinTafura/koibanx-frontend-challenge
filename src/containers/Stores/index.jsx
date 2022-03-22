import { useState, useContext, useEffect} from 'react'
import TableStore from '../../components/tableStores'
import stores from '../../db/stores.json'

const Stores = () => {


    return (
        <div className='container'>
            <h1>STORES</h1>

            <TableStore stores/>
        </div>
    )
}   

export default Stores
