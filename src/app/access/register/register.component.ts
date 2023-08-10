import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  public showLoginPanel() {
    this.showPanel.emit('login');
     
  }

}
