package crud.back.dao;

import crud.back.entity.Cliente;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClienteDAO extends CrudRepository<Cliente, Long> {

    //@Query(value = "SELECT * FROM cliente c WHERE c.cliente_sexo = 'masculino'", nativeQuery = true)
    @Query("SELECT c FROM Cliente c WHERE c.clienteSexo = 'masculino'")
    public List<Cliente> testQuery();
}
