import { useState, useContext, useEffect} from 'react'
import stores from '../../db/stores.json'

const TableStore = ({}) => {

    
    useEffect(() => {

        return () => {
            
        }
    }, [])
    
    
    // const productsToShow = {
        
    // }

    return (
        <table className="table  mt-5">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Id </th>
                        <th scope="col">Comercio</th>
                        <th scope="col">Cuit</th>
                        <th scope="col">Concepto 1</th>
                        <th scope="col">Concepto 2</th>
                        <th scope="col">Concepto 3</th>
                        <th scope="col">Concepto 4</th>
                        <th scope="col">Concepto 5</th>
                        <th scope="col">Concepto 6</th>
                        <th scope="col">Balance Actual</th>
                        <th scope="col">Activo</th>
                        <th scope="col">Ultima Venta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stores.map((store, i)=>{
                            return (
                                <tr > 
                                    <td className='py-1' > {store.id} </td>
                                    <td className='py-1' > {store.name} </td>
                                    <td className='py-1' > {store.cuit} </td>
                                    {
                                        store.concepts.map(concept=><td className='py-1' > {concept} </td>)
                                    }
                                    <td className='py-1' > {store.currentBalance} </td>
                                    <td className='py-1' > {store.active ? 1 : 0} </td>
                                    <td className='py-1' > {store.lastSale} </td>
                                </tr>
                            )
                        })    
                    }
                </tbody>
            </table>
    )
}   

export default TableStore
