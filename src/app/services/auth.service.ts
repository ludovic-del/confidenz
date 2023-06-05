import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
      
  constructor() { }
  createNewUser(email:string, password:string, _name:string, _prenom:string, _username:string ){
    return new Promise<void>(
      (resolve, reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          ()=>{
            resolve();
          },
          (error: any)=>{
            reject(error);
          }
        );
      }
    );
  }
  signInUser(email:string, password:string){
    return new Promise<void>(
      (resolve, reject)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{
            resolve();
          },
          (error: any)=>{
            reject(error);
          }
        );
        
      }
    );
  }
  signOutUser(){
    firebase.auth().signOut();
  }

}

