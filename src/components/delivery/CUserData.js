import React, { useState } from 'react'

export default function CUserData() {

    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");

    return (
        <div className="d-flex justify-content-center">
            <div style={{width: '400px'}}>
                <div className="card mt-3">
                    <div className="card-body">
                        <h2 className="card-title">
                            Registro
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>Correo:</label>
                                <input type="email" className="form-control" value={correo} onChange={(ev) => {setCorreo(ev.target.value)}} placeholder="Ingresar Correo"/>
                            </div>
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input type="text" className="form-control" value={nombre} onChange={(ev) => {setNombre(ev.target.value)}} placeholder="Ingresar Nombres"/>
                            </div>
                            <div className="form-group">
                                <label>Apellido:</label>
                                <input type="text" className="form-control" value={apellido} onChange={(ev) => {setApellido(ev.target.value)}} placeholder="Ingresar Apellidos"/>
                            </div>
                            <div className="form-group">
                                <label>Documento de identidad:</label>
                                <input type="text" className="form-control" value={documento} onChange={(ev) => {setDocumento(ev.target.value)}} placeholder="Ingresar Documento de Identidad"/>
                            </div>
                            <div className="form-group">
                                <label>Teléfono/Móvil:</label>
                                <input type="text" className="form-control" value={telefono} onChange={(ev) => {setTelefono(ev.target.value)}} placeholder="Ingresar Teléfono/Móvil"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
