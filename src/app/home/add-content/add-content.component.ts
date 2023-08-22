import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import * as firebase from 'firebase';

import { RepositoryService } from '../../repository.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  public email : string;
  private image: any;

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null)
  })

  constructor(
    private repositoryService: RepositoryService   
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
    })
  }


  public publish(): void {
    this.repositoryService.publish({
      email: this.email,
      title: this.form.value.title,
      image: this.image[0]
    });
  }


  public prepareImageUpload(event: Event): void {
    this.image = (<HTMLInputElement>event.target).files;
    
  }

}
