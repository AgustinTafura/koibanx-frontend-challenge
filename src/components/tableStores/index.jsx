import {formatDate} from '../../utils/utils'


const TableStore = (props) => {
    
    return (
        <table className="table  mt-5">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Id </th>
                        <th scope="col">Name</th>
                        <th scope="col">Cuit</th>
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
                                    <select name='avtive' className="form-control">
                                        <option value="">Todo</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                        
                                    </select>  
                                </div>
                            </div>
                        </th>
                        <th scope="col">Ultima Venta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.storesFetched?.map((store, i)=>{
                            console.log(12, store, 12)
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
