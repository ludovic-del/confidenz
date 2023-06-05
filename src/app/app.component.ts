import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';


import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    const firebaseConfig = {
        apiKey: "AIzaSyCNJ3Pq1YXKHd2HC0HzLe4rzKmwAX1QFys",
        authDomain: "confidenz-2a0cb.firebaseapp.com",
        projectId: "confidenz-2a0cb",
        storageBucket: "confidenz-2a0cb.appspot.com",
        messagingSenderId: "1039877109798",
        appId: "1:1039877109798:web:b9b5caaf094605a0d3cee7",
        measurementId: "G-4RVE5CG8RQ"
      };
      
      const app = initializeApp(firebaseConfig);
      
  }
}

