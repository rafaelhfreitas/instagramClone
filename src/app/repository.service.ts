import * as firebase from 'firebase';


export class RepositoryService {
    public publish(publish: any): void {

        console.log(publish);

        let imageName = Date.now();

        firebase.storage().ref()
            .child(`images/${imageName}`)
            .put(publish.image);


        /*
        firebase.database().ref(`feed/${btoa(publish.email)}`)
            .push({ title: publish.title})
        */

    }
}