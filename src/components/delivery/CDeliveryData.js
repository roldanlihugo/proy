import React, {useState} from 'react'

export default function CDeliveryData() {

    const [direccion, setDireccion] = useState("");
    const [numero, setNumero] = useState("");
    const [referencia, setReferencia] = useState("");
    const [persona, setPersona] = useState("");

    return (
        <div className="d-flex justify-content-center">
            <div style={{width: '400px'}}>
                <div className="card mt-3">
                    <div className="card-body">
                        <h2 className="card-title">
                            Entrega
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>Ingrese su dirección:</label>
                                <input type="text" className="form-control" value={direccion} onChange={(ev) => setDireccion(ev.target.value)} placeholder="Ingresar Dirección"/>
                            </div>
                            
                            <div className="form-group">
                                <label>Número/Piso/Departamento:</label>
                                <input type="text" className="form-control" value={numero} onChange={(ev) => setNumero(ev.target.value)} placeholder="Ingresar Número/Piso/Departamento"/>
                            </div>
                            <div className="form-group">
                                <label>Referencia de su ubicación:</label>
                                <input type="text" className="form-control" value={referencia} onChange={(ev) => setReferencia(ev.target.value)} placeholder="Ingresar Ubicación"/>
                            </div>
                            <div className="form-group">
                                <label>Nombre de la persona que va a recibir:</label>
                                <input type="text" className="form-control" value={persona} onChange={(ev) => setPersona(ev.target.value)} placeholder="Ingresar Nombre de persona a recibir"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}