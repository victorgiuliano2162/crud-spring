import { ClienteService } from 'src/app/services/cliente.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from 'src/model/cliente.model';

export const clienteResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  clienteService: ClienteService = inject(ClienteService)
): Observable<Cliente> => {
  const clienteId = route.paramMap.get('clienteId');

  if (clienteId) {
    return clienteService.getCliente(Number(clienteId));
  } else {
    const cliente: Cliente = {
      clienteId: 0,
      clienteNome: '',
      clienteCpf: '',
      clienteTelefone: '',
      clienteEmail: '',
      clienteEndereco: '',
      clienteCidade: '',
      clienteItems: '',
      clienteSexo: '',
    };

    return of(cliente);
  }
};
