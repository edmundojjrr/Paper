package com.uniasselvi.br.repository;

import com.uniasselvi.br.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
