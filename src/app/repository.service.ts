import * as firebase from 'firebase';


export class RepositoryService {
    public publish(publish: any): void {

        console.log(publish);

        let imageName = Date.now();

        firebase.storage().ref()
            .child(`images/${imageName}`)
            .put(publish.image)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => {
                    console.log(snapshot);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log('upload completo')
                });


        /*
        firebase.database().ref(`feed/${btoa(publish.email)}`)
            .push({ title: publish.title})
        */

    }
}