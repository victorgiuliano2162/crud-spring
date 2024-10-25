package crud.back.controller;

import crud.back.entity.Cliente;
import crud.back.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ClientController {

    @Autowired
    private ClienteService clienteService;


    @PostMapping("cliente/save")
    public Cliente salvarCliente(@RequestBody Cliente cliente) {
        return clienteService.saveCliente(cliente);
    }

    @GetMapping("cliente/clientes")
    public List<Cliente> getClientes() {
        return clienteService.getClientes();
    }

    @GetMapping("cliente/{id}")
    public Cliente getCliente(@PathVariable Long id) {
        return clienteService.getClienteById(id);
    }

    @DeleteMapping("cliente/del/{id}")
    public void deletarCliente(@PathVariable Long id) {
        clienteService.deleteClienteById(id);
    }

    @PutMapping("cliente/up")
    public Cliente atualizarCliente(@RequestBody Cliente cliente) {
        return clienteService.updateCliente(cliente);
    }
}
