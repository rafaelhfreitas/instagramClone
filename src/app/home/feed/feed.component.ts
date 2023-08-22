import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { RepositoryService } from '../../repository.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  public email: string;
  public contents: any;

  constructor(
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
      this.updateFeed();
    })

  }


  public updateFeed(): void {
    this.repositoryService.getContent(this.email)
      .then((contents: any) => {
        this.contents = contents;
      })
  }

}
