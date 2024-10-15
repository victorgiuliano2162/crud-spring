package crud.back.dao;

import crud.back.entity.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteDAO extends CrudRepository<Cliente, Long> {

}
