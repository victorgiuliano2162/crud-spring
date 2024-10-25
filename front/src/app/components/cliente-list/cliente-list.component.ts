import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/model/cliente.model';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
})
export class ClienteListComponent {
  clienteData: Cliente[] = [];

  displayedColumns: string[] = [
    'clienteId',
    'clienteNome',
    'clienteCpf',
    'clienteTelefone',
    'clienteEmail',
    'clienteEndereco',
    'clienteCidade',
    'clienteItems',
    'clienteSexo',
    'edit',
    'delete'
  ];

  constructor(private clienteService: ClienteService, private router: Router) {
    this.getClienteList();
  }

  getClienteList(): void {
    this.clienteService.getClientes().subscribe({
      next: (res: Cliente[]) => {
        this.clienteData = res;
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  deleteCliente(clienteId: number): void {
    console.log(clienteId);
    this.clienteService.deleteCliente(clienteId).subscribe({
      next: (res) => {
        this.getClienteList();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    });
  }

  editCliente(clienteId: number) {
    this.router.navigate(['cliente', { clienteId: clienteId }]);
  }
}
