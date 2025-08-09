import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords do not match";
      return;
    }

    try {
      // const auth = getAuth()
      // const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      console.log('Registered:', userCredential.user?.email);
      this.errorMessage = '';
      this.router.navigate(['/signin']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
