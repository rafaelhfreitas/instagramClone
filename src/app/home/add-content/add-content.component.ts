import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { RepositoryService } from '../../repository.service';
import { ProgressService } from '../../progress.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  public email : string;
  private image: any;


  public progressContent: string = 'pending';
  public percentUpload: number;

  public form: FormGroup = new FormGroup({
    'title': new FormControl(null)
  })

  constructor(
    private repositoryService: RepositoryService,
    private progressService: ProgressService   
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

    let uploadProgress = Observable.interval(1000);
    let nextEvent = new Subject();

    nextEvent.next(true);

    uploadProgress
      .takeUntil(nextEvent)
      .subscribe( () => {
        // console.log(this.progressService.status);
        // console.log(this.progressService.state);

        this.progressContent = 'working';

        this.percentUpload = Math.round((this.progressService.state.bytesTransferred / this.progressService.state.totalBytes) * 100);

        if (this.progressService.status === 'Finished') {
          this.progressContent = 'finished';
          nextEvent.next(false);
        }
    })

  }


  public prepareImageUpload(event: Event): void {
    this.image = (<HTMLInputElement>event.target).files;
    
  }

}
