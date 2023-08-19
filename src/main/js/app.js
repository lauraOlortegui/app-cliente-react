const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageVerProducto = require('./pages/ver-producto');
const PageNuevoProducto= require('./pages/nuevo-producto');
const PageEditarProducto = require('./pages/editar-producto');
const PageVerVenta = require('./pages/ver-venta');
const PageNuevaVenta=require('./pages/nuevo-venta')
const PageNuevoDetalle = require('./pages/nuevo-detalle');

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-producto/:id', element: <PageVerProducto />},
	{path: '/nuevo-producto', element: <PageNuevoProducto />},
	{path: '/editar-producto/:id', element: <PageEditarProducto />},
	{path: '/ver-venta/:id', element: <PageVerVenta />},
	{path:'/nueva-venta',element:<PageNuevaVenta/>},
	{path: '/ver-venta/:id/nuevo-detalle', element: <PageNuevoDetalle />},
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
