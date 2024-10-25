package crud.back.service;

import crud.back.dao.ClienteDAO;
import crud.back.entity.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteDAO clienteDAO;

    public Cliente saveCliente(Cliente cliente) {
        return clienteDAO.save(cliente);
    }

    public List<Cliente> getClientes() {
        List<Cliente> clientes = new ArrayList<>();
        clienteDAO.findAll().forEach(clientes::add);
        return clientes;
    }

    public Cliente getClienteById(Long id) {
        return clienteDAO.findById(id).orElseThrow();
    }

    public void deleteClienteById(Long id) {
        clienteDAO.deleteById(id);
    }

    public Cliente updateCliente(Cliente cliente) {
        clienteDAO.findById(cliente.getClienteId()).orElseThrow();
        return clienteDAO.save(cliente);
    }
}
