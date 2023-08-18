import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();

  public errorMessage: string;

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  })

  constructor(
    private authService: AuthService) { }

  ngOnInit() {
  }

  public showRegisterPanel():void {
    console.log('estou aqui');
    this.showPanel.emit('register');
  }

  public authenticate(): void {
    //console.log(this.form);
    this.authService.authenticate(this.form.value.email, this.form.value.password)
      .then(() => {
        this.errorMessage = this.authService.message;
      });
  }

}
