import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      // const auth = getAuth();
      // const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('Logged in:', userCredential.user?.email);
      this.errorMessage = '';
      this.router.navigate(['/home']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
