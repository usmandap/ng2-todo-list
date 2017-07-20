import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoAuthService } from '../todo-list-auth.service';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './todo-list-register.component.html',
  styleUrls: ['./todo-list-register.component.scss']
})
export class TodoListRegisterComponent implements OnInit {
  form: FormGroup;
  private toasterService: ToasterService;
  constructor(private fb: FormBuilder, private todoauthservice: TodoAuthService,
    toasterService: ToasterService, private router: Router) {
    this.toasterService = toasterService;
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['']
    });
  }
  register(form) {
    console.log(form.value);
    this.todoauthservice.Register(form.value);
  }
  loginForm() {
    this.router.navigate(['/login']);
  }

}
