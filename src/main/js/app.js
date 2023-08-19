const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageVerProducto = require('./pages/ver-producto');
const PageNuevoProducto= require('./pages/nuevo-producto');
const PageEditarProducto = require('./pages/editar-producto');
const PageVerBanda = require('./pages/ver-banda');
const PageNuevoIntegrante = require('./pages/nuevo-integrante');

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-producto/:id', element: <PageVerProducto />},
	{path: '/nuevo-producto', element: <PageNuevoProducto />},
	{path: '/editar-producto/:id', element: <PageEditarProducto />},
	{path: '/ver-banda/:id', element: <PageVerBanda />},
	{path: '/ver-banda/:id/nuevo-integrante', element: <PageNuevoIntegrante />},
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
