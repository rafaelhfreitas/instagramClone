import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  public showRegisterPanel():void {
    console.log('estou aqui');
    this.showPanel.emit('register');

  }

}
