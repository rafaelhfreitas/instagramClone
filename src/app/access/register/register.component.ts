import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }


  public showLoginPanel() {
    this.showPanel.emit('login');
     
  }


  public userRegister(): void {
    console.log(this.form);
  }

}
