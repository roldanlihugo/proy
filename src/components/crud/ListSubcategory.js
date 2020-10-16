import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ListSubcategory({subcategorias, deleteSubcategory}) {
    console.log(subcategorias)
    return (
        <div>
  
            <Table>
                <thead>
                    <tr>
                    <th>Nro</th>
                        <th>Nombre de subcategorias</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
 
                { 
                    subcategorias.map(
                        (
                            { 
                                id,
                                subcategoryName
                            }, 
                            i
                        ) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{subcategoryName}</td>
                            <td>
                                <button className="btn btn-outline-info btn-sm mr-2">
                                    <i className="fas fa-pen-alt"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteSubcategory({id})}}>
                                <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr> 
                        )
                    )                        
                } 
                </tbody>
            </Table>
        </div> 
    )
}
