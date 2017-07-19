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
  private toasterService: ToasterService;
  constructor(private fb: FormBuilder, private todoauthservice: TodoAuthService,
    toasterService: ToasterService, private router: Router) {
    this.toasterService = toasterService;
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login(form) {
    console.log(form.value);
    let user;
    user = this.todoauthservice.loginUser(form.value);
    if (user) {
      this.toasterService.pop('success', 'Logged In', 'User logged in successfully');
    }
    console.log(user);
  }
  registerForm() {
    this.router.navigate(['/register']);
  }

}
