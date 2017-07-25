import { Component, OnInit, Output } from '@angular/core';
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
  spinStatus = false;
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
    this.spinStatus = true;
    this.todoauthservice.Register(form.value).then(
            (success) => {
                console.log(success);
                this.todoauthservice.saveUserDetails(form.value);
                this.toasterService.pop('success', 'Registered', 'You are registered successfully');
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
