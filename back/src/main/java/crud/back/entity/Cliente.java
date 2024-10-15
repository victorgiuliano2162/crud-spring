package crud.back.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cliente")
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String clientNome;
    private String clienteCpf;
    private String clienteTelefone;
    private String clienteEmail;
    private String clienteEndereco;
    private String clienteCidade;
    private String clienteItems;
}
