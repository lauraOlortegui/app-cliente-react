const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerVenta = () => {

    let { id } = useParams();
    const [venta, setVenta] = useState({});
    const [detalles, setDetalles] = useState([]);


    useEffect(() => {
        url_venta= '/api/ventas/' + id

        client({
            method: 'GET',
            path: url_venta
        }).done(response => setVenta(response.entity));

        client({
            method: 'GET',
            path: url_venta + '/formacion'
        }).done(response => setDetalles(response.entity))
        
    }, []);


    return (
        <>
            <h1>Venta</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Total</th>
                        <td>{venta.total}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <h2>Detalles</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>

                    {detalles.map(detalle => {

                        return (
                            <tr key={detalle.ID}>
                                <td>{detalle.PRODUCTO}</td>
                                <td>{detalle.CANTIDAD}</td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>
            <hr />
            <Link to={`/ver-venta/${id}/nuevo-detalle`}>Agregar Detalle</Link> |  
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerVenta;