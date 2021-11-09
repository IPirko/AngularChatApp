import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA0DJ0oIHJI_oibxyCaK-46iy2mhdygc0M",
  authDomain: "angularchatroom-8dbd9.firebaseapp.com",
  databaseURL: "https://angularchatroom-8dbd9-default-rtdb.europe-west1.firebasedatabase.app",
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
