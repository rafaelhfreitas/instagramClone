import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../user.model';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required]),
    'fullName': new FormControl(null, [Validators.required]),
    'login': new FormControl(null , [Validators.required]),
    'password': new FormControl(null , [Validators.required])
  })

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  public showLoginPanel() {
    this.showPanel.emit('login');
     
  }


  public userRegister(): void {
    console.log(this.form);

    let user: User = new User(
      this.form.value.email,
      this.form.value.fullName, 
      this.form.value.login, 
      this.form.value.password);
    this.authService.userRegister(user)
      .then(() => this.showLoginPanel());
  }

}
