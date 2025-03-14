package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Venta {

	private @Id @GeneratedValue Long id;
	private Float total;

	public Venta() {}

	public Venta( Float total) {
		this.total = total;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Venta b = (Venta) o;
		return Objects.equals(id, b.id) &&
			Objects.equals(total, b.total);
	}	

	@Override
	public int hashCode() {

		return Objects.hash(id, total);
	}

	@Override
	public String toString() {
		return "Venta{" +
			"id=" + id +
			", total='" + total + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Float getTotal() {
		return total;
	}

	public void setTotal(Float total) {
		this.total = total;
	}

}