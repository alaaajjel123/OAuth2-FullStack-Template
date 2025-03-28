import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginWithGoogle() {
    // Implement Google OAuth2 login logic here
    const googleToken = 'dummy-google-token'; // Replace with actual token
    this.authService.loginWithGoogle(googleToken).subscribe((response: any) => {
      localStorage.setItem('access_token', response.token);
      this.router.navigate(['/home']);
    });
  }
}
