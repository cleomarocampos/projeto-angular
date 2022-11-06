import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import swal from 'sweetalert2';

import { User } from './../../model/user.model';
import { CarService } from './../../services/car.service';
import { Car } from './../../model/car.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  public users$: Observable<User[]>;

  public form: FormGroup;

  public loading = false;
  public formSubmited = false;

  public id: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: CarService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user_id: new FormControl(null, Validators.nullValidator),
      title: new FormControl('', Validators.required),
      plat: new FormControl('', Validators.required),
      model: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.min(4),
        Validators.pattern('[0-9]+$')
      ])),
      year: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.min(4),
        Validators.pattern('[0-9]+$')
      ])),
      description: new FormControl('', Validators.nullValidator),
    });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.service.find(this.id).subscribe((car: Car) => {
        this.form.patchValue(car)
      });
    }

    this.users$ = this.userService.getAll();
  }

  save() {
    this.formSubmited = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    if (!this.id) {
      this.service.create(this.form.value).subscribe(() => {
        this.loading = false;
      });
    } else {
      this.service.update(this.id, this.form.value).subscribe(() => {
        this.loading = false;
      });
    }

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
      title: 'Registro salvo com sucesso!'
    });

    this.router.navigate(['/cars']);

  }

}
