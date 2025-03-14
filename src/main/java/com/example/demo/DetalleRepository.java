package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "detalles", path = "detalles")
public interface DetalleRepository extends CrudRepository<Detalle, Long> {

}