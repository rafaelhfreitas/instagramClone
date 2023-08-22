import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { ProgressService } from './progress.service';

@Injectable()
export class RepositoryService {

    constructor(
        private progressService: ProgressService
    ){}

    public publish(publish: any): void {

        console.log(publish);

        
        firebase.database().ref(`feed/${btoa(publish.email)}`)
        .push({ title: publish.title})
        .then((response: any) => {
            let imageName = response.key;
            
            firebase.storage().ref()
            .child(`images/${imageName}`)
            .put(publish.image)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => {
                    this.progressService.status =  'in Progress';
                    this.progressService.state = snapshot;
                    // console.log('Capturado no metodo on: ',snapshot);
                },
                (error) => {
                    this.progressService.status =  'Error';
                    //console.log(error);
                },
                () => {
                    this.progressService.status =  'Finished';
                    //console.log('upload completo');
                });
            })
    }

    public getContent(email: string): any {

        firebase.database().ref(`feed/${btoa(email)}`)
            .once('value')
            .then((snapshot: any) => {
                console.log(snapshot.val());


                let contents: Array<any> = [];

                snapshot.forEach((childSnapshot: any) => {
                    firebase.storage().ref()
                        .child(`images/${childSnapshot.key}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            console.log(url);
                        })
                });
            })

    }
}