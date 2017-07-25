import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoAuthService } from '../todo-list-auth.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-list-login',
  templateUrl: './todo-list-login.component.html',
  styleUrls: ['./todo-list-login.component.scss']
})
export class TodoListLoginComponent implements OnInit {
  form: FormGroup;
  spinStatus = false;
  constructor(private fb: FormBuilder, private todoauthservice: TodoAuthService,
    private toasterService: ToasterService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(form) {
    this.spinStatus = true;
    console.log(form.value);
    this.todoauthservice.Login(form.value).then(
            (success) => {
                console.log(success);
                this.toasterService.pop('success', 'Logged In', success.displayName + ' logged in successfully');
                this.spinStatus = false;
                this.router.navigate(['/list'])
            }).catch(
            (err) => {
                console.log(err);
                this.toasterService.pop('error', err.name, err.message);
                // this.error = err;
            });

  }

}
