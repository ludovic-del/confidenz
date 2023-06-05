import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  signUpForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router){
    this.signUpForm = this.formBuilder.group({
      email:[ '',[ Validators.required, Validators.email ] ],
      name:[ '',[ Validators.required, Validators.name ] ],
      prenom:[ '',[ Validators.required ] ],
      userName:[ '',[ Validators.required ] ],
      password:[ '',[ Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/) ] ]
    });
  }
  ngOnInit(){  

  }
  onSubmit(){
    const email = this.signUpForm.get('email')?.value;
    const name = this.signUpForm.get('name')?.value;
    const prenom = this.signUpForm.get('prenom')?.value;
    const username = this.signUpForm.get('username')?.value;
    const password = this.signUpForm.get('password')?.value;
    this.authService.createNewUser(email, password, name, prenom, username).then(
      ()=>{
        this.router.navigate([ '/home']);
      },
      (error)=>{
        this.errorMessage = error;
      }
    );

  }

}
