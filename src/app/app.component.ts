import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyDSQN1gw-fKNGUbHRiqj9H-gztJ8ZUr-i4",
      authDomain: "jta-instagram-clone-afa9c.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-afa9c-default-rtdb.firebaseio.com",
      projectId: "jta-instagram-clone-afa9c",
      storageBucket: "jta-instagram-clone-afa9c.appspot.com",
      messagingSenderId: "1045590454707",
      appId: "1:1045590454707:web:116fc58e524e895aac5bc6",
      measurementId: "G-M0Z2QN4MDJ"
    };

    firebase.initializeApp(firebaseConfig);
  }

}
