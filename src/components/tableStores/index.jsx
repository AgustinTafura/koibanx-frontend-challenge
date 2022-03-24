import { useState, useEffect } from 'react'
import {formatDate, orderArrOfObjects} from '../../utils/utils'

const TableStore = (props) => {
    
    const [dataToShow, setDataToShow] = useState(props.storesFetched)
    const [nameState, setNameState] = useState(true)
    const [cuitState, setCuitState] = useState(true)
    const filterData = (e) => {
        const value = e.target.value
        const name = e.target.name
        
        if(value === '') {
            setDataToShow(props.storesFetched)
            return
        }

        const newList = props.storesFetched?.filter(store=>store[name] === value)
        setDataToShow(newList)
    }

    const orderBy = (e) => {
        const field = e.target.name
        const sequence = e.target.value === 'true' ? 'asc' : 'desc'
        dataToShow && orderArrOfObjects(dataToShow, field, sequence)
    }

    
    useEffect(() => {
        setDataToShow(props.storesFetched)

      // restart filters
        document.querySelector('[name="active"]').value = ''

    }, [props.storesFetched])
    
    return (
        <table className="table  mt-5">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">
                            Id
                        </th>
                        <th scope="col">
                            <button className='btn btn-light' name='name' value={nameState} onClick={(e)=>{setNameState(!nameState); orderBy(e)}}>Name</button>
                        </th>
                        <th scope="col">
                            <button className='btn btn-light' name='cuit' value={cuitState} onClick={(e)=>{setCuitState(!cuitState); orderBy(e)}}>Cuit</button>
                        </th>
                        <th scope="col">Concepto 1</th>
                        <th scope="col">Concepto 2</th>
                        <th scope="col">Concepto 3</th>
                        <th scope="col">Concepto 4</th>
                        <th scope="col">Concepto 5</th>
                        <th scope="col">Concepto 6</th>
                        <th scope="col">Balance Actual</th>
                        <th scope="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div>Activo</div>
                                </div>
                                <div>
                                    <select name='active' className="form-control" onChange={filterData}>
                                        <option value="">Todo</option>
                                        <option value="true">1</option>
                                        <option value="false">0</option>
                                        
                                    </select>  
                                </div>
                            </div>
                        </th>
                        <th scope="col">Ultima Venta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataToShow?.map((store, i)=>{
                            return (
                                <tr key={store.name}> 
                                    <td className='py-1' > {store.id} </td>
                                    <td className='py-1' > {store.name} </td>
                                    <td className='py-1' > {store.cuit} </td>
                                    {
                                        store.concepts?.map((concept, i)=><td key={concept} className='py-1' > {concept} </td>)
                                    }
                                    <td className='py-1' > {store.currentBalance} </td>
                                    <td className='py-1' > {store.active === 'true' ? 1 : 0} </td>
                                    <td className='py-1' > {formatDate(new Date(store.lastSale))} </td>
                                </tr>
                            )
                        })    
                    }
                </tbody>

            </table>
    )
}   

export default TableStore
