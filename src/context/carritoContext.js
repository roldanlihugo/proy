import React, {useState, createContext} from 'react';

export const CarritoContext = createContext();

const CarritoContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    const anadirProducto =  (producto) => {
        setCarrito([...carrito, producto])
    }

    const eliminarProducto =  (producto) => { 
        let carritoTemp =  carrito.filter(prod => prod.productId !== producto.productId) 
        setCarrito(carritoTemp);
    }

    const limpiarCarrito =  () => { 
        setCarrito([]);
    }
  
    return(
        <CarritoContext.Provider value={{carrito, anadirProducto, eliminarProducto, limpiarCarrito}}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoContextProvider;