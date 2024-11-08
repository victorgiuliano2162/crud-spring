package crud.back.entity;

import java.util.UUID;

public class Estoque {
    /*
    O objetivo do estoque é ser uma tabela que armazene os códigos dos produtos
    e para cada código uma quantidade
     */

    UUID prodCodigo;
    Long prodQuantidade;
}
