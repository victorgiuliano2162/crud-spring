package crud.back.entity;

import java.util.List;

public class Compra {
    /*
    Cada compra terá um Cliente e um ou mais produtos
    Para um produto ser comprado o estoque precisa ser conferido e alterado

     */

    Cliente cliente;
    List<Produto> produtos;

}
