package com.uniasselvi.br.service;

import com.uniasselvi.br.model.Cliente;
import com.uniasselvi.br.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.OpenOption;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente criar(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public Optional<Cliente> buscar(Integer id){
        return clienteRepository.findById(id);
    }

    public void deletar(Integer id){
        clienteRepository.deleteById(id);
    }
}
