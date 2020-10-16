import React, {useState} from 'react';
import {Form } from 'react-bootstrap';

export default function CPayData() {

    const [numero, setNumero] = useState([]);
    const [nombre, setNombre] = useState([]);
    const [mes, setMes] = useState([]);
    const [anio, setAnio] = useState([]);
    const [ccv, setCCV] = useState([]);

    return (
        <div className="d-flex justify-content-center">
            <div style={{width: '400px'}}>
                <div className="card mt-3">
                    <div className="card-body">
                        <h2 className="card-title">
                            Pago
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>Número de la tarjeta:</label>
                                <input type="email" className="form-control" value={numero} onChange={(ev) => setNumero(ev.target.value)} placeholder="Ingresar Número"/>
                            </div>
                            <div className="form-group">
                                <label>Nombre que figura en la tarjeta:</label>
                                <input type="text" className="form-control" value={nombre} onChange={(ev) => setNombre(ev.target.value)} placeholder="Ingresar Número"/>
                            </div>
                            <div className="form-group" inline> 
                                <label>Mes:</label>
                                <Form.Control required as="select" value={mes} onChange={(ev) => setMes(ev.target.value)} placeholder="Ingresar Número">
                                        <option key={0} value={0}>Mes</option> 
                                </Form.Control> 
                                <label>Año:</label> 
                                <Form.Control required as="select" value={anio} onChange={(ev) => setAnio(ev.target.value)} placeholder="Ingresar Número">
                                        <option key={0} value={0}>Año</option> 
                                </Form.Control> 
                            </div>
                            <div className="form-group">
                                <label>CCV:</label>
                                <input type="text" className="form-control" value={ccv} onChange={(ev) => setCCV(ev.target.value)} placeholder="Ingresar Número"/>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
