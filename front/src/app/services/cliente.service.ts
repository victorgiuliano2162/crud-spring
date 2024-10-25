import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:8080";


  public saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${this.api}/cliente/save`, cliente);
  }

  public updateCliente(cliente: Cliente) {
    return this.httpClient.put<Cliente>(`${this.api}/cliente/up`, cliente);
  }

  public deleteCliente(clienteId: number) {
    return this.httpClient.delete(`${this.api}/cliente/del/${clienteId}`);
  }

  public getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.api}/cliente/clientes`);
  }

  public getCliente(clienteId: number) {
    return this.httpClient.get<Cliente>(`${this.api}/cliente/${clienteId}`)
    //                                             cliente/cliente/{id}
  }
}
