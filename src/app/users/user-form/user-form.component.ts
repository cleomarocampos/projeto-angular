import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import swal from 'sweetalert2';

import { User } from './../../model/user.model';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public users$: Observable<User[]>;

  public form: FormGroup;

  public loading: boolean = false;

  public formSubmited: boolean = false;

  public id: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
      ])),
    });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.service.find(this.id).subscribe((user: User) => {
        this.form.patchValue(user)
      });
    }
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

    this.router.navigate(['/users']);
  }

}
