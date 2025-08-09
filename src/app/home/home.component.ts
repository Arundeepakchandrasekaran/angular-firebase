import { Component } from '@angular/core';
// import { Auth } from '@angular/fire/auth';
// import { signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  // logout() {
  //   signOut(this.auth)
  //     .then(() => {
  //       console.log('User logged out');
  //       this.router.navigate(['/login']);
  //     })
  //     .catch((error) => {
  //       console.error('Logout error:', error);
  //     });
  // }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
