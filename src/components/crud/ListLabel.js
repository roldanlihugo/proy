import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ListLabel({productoslabel, deleteLabel}) {
    console.log(productoslabel)
    return (
        <div>
  
            <Table>
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Nombre de Label</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
 
                { 
                    productoslabel.map(
                        (
                            { 
                                id,
                                labelName
                            }, 
                            i
                        ) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{labelName}</td>
                            <td>
                                <button className="btn btn-outline-info btn-sm mr-2">
                                    <i className="fas fa-pen-alt"></i>
                                </button>
                                <button className="btn btn-outline-danger btn-sm" onClick={()=>{deleteLabel({id})}}>
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
