import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/model/cliente.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
})
export class ClienteCreateComponent implements OnInit{
  cliente: Cliente = {
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

  isCreateCliente: boolean = true;

  items: string[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if(!this.isCreateCliente) {
      console.log("isCreateCliente tá falso")
    }
  }

  ngOnInit(): void {
    this.cliente = this.activatedRoute.snapshot.data['cliente'];

    if(this.cliente && this.cliente.clienteId > 0) {
      this.isCreateCliente = true;

      if(this.cliente.clienteItems != '') {
        this.items = [];
        this.items = this.cliente.clienteItems.split(',');
      }
    } else {
      this.isCreateCliente = false;
    }
  }

  saveCliente(clienteForm: NgForm): void {
    if(!this.isCreateCliente) {
      this.clienteService.saveCliente(this.cliente).subscribe({
        next: (res: Cliente) => {
          console.log(res);
          clienteForm.reset();
          this.router.navigate(['cliente-list']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      });
    } else {
      this.clienteService.updateCliente(this.cliente).subscribe({
        next: (res: Cliente) => {
          this.router.navigate(['cliente-list']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
    }
  }

  clearForm() {
   this.cliente = {
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
  }
}
