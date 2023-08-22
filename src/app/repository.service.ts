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

    public getContent(email: string): Promise<any> {


        return new Promise((resolve, reject) => {
            firebase.database().ref(`feed/${btoa(email)}`)
                .orderByKey()
                .once('value')
                .then((snapshot: any) => {
                    console.log(snapshot.val());

                    let contents: Array<any> = [];

                    snapshot.forEach((childSnapshot: any) => {

                        let content = childSnapshot.val();

                        firebase.storage().ref()
                            .child(`images/${childSnapshot.key}`)
                            .getDownloadURL()
                            .then((url: string) => {
                                content.imageUrl = url;
                                firebase.database().ref(`userDetail/${btoa(email)}`)
                                    .once('value')
                                    .then((snapshot: any) => {
                                        content.userName = snapshot.val().fullName;
                                        contents.push(content);
                                    })
                            })
                    });
            resolve(contents);
            })
        })

    }
}