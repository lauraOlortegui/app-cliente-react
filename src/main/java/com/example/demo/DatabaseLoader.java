package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryP;
	private final VentaRepository repositoryV;
	private final DetalleRepository repositoryD;

	@Autowired
	public DatabaseLoader(
		ProductoRepository repositoryP,
		 VentaRepository repositoryV,
		 DetalleRepository repositoryD) {
		this.repositoryP = repositoryP;
		this.repositoryV = repositoryV;
		this.repositoryD = repositoryD;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Producto producto1 = new Producto("Leche Gloria",4.40f);
		Producto producto2 = new Producto("Pan Bimbo",5.90f);
		Producto producto3 = new Producto("Nescafe",2.80f);
		this.repositoryP.save(new Producto("Jamonada",2.50f));
		this.repositoryP.save(new Producto("Yogurt Laive",6.50f));
		this.repositoryP.save(producto1);
		this.repositoryP.save(producto2);
		this.repositoryP.save(producto3);

		Venta venta1 = new Venta(8.52f);
		Venta venta2 = new Venta(10.00f);
		this.repositoryV.save(venta1);
		this.repositoryV.save(venta2);

		Detalle detalle1 = new Detalle(venta1, producto1, 2);
		this.repositoryD.save(detalle1);
		Detalle detalle2 = new Detalle(venta2, producto2, 2);
		this.repositoryD.save(detalle2);

	}

	
}