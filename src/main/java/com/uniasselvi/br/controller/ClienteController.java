package com.uniasselvi.br.controller;

import com.uniasselvi.br.model.Cliente;
import com.uniasselvi.br.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;


    @PostMapping
    public Cliente criar(@RequestBody  Cliente cliente){
        return clienteService.criar(cliente);
    }

    @GetMapping("/{id}")
    public Optional<Cliente>buscar(@PathVariable Integer id){
        return clienteService.buscar(id);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id){
        clienteService.deletar(id);
    }

    @PutMapping
    public Cliente atualizar(@RequestBody Cliente cliente){
        Optional<Cliente> clienteOptional = clienteService.buscar(cliente.getId());
        if (clienteOptional.isPresent()){
            return clienteService.criar(cliente);
    }
    return null;
    }
}
