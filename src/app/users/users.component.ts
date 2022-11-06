import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import swal from 'sweetalert2';

import { UserService } from '../services/user.service';
import { User } from './../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  public loading: boolean = false;

  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  public onRefresh(): void {
    this.users$ = this.service.getAll();
  }

  public onDelete(user: User) {

    swal.fire({
      title: '<strong>Confirmação</strong>',
      icon: 'info',
      html:
        'Tem certeza que deseja remover esse cadastro?',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Confirmar!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> Cancelar',
      cancelButtonAriaLabel: 'Thumbs down'
    }).then(result => {

      if (result.isConfirmed) {

        this.loading = true;

        this.service.delete(user.id).subscribe(() => {

          this.onRefresh();

          const Toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', swal.stopTimer)
              toast.addEventListener('mouseleave', swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Registro deletado com sucesso!'
          });
        });

      } else {
        swal.fire('Cancelado!', 'Operação cancelada', 'success').then(() => {
          this.loading = false;
        });
      }

    });
  }

}
