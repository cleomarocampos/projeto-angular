import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import swal from 'sweetalert2';

import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CarsComponent implements OnInit {

  cars$: Observable<Car[]>;

  loading = false;

  constructor(
    private service: CarService
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  public onRefresh() {
    this.cars$ = this.service.getAll();
  }

  public deleteCar(car: Car) {

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

        this.service.delete(car.id).subscribe(() => {

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
