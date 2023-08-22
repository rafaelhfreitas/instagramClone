import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild('contents') public contents: any;

  constructor(
    private authService: AuthService
   ) { }

  ngOnInit() {
  }

  public logout(): void {
    this.authService.logout();
  
  }


  public updateFeed(): void {
    this.contents.updateFeed();
  }

}
