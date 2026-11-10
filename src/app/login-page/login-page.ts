import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  private router = inject(Router);

  username: string = '';
  password: string = '';
  
  loginFailed: boolean = false;

  login() {
    console.log('Login button clicked');

    if(this.username == "johncena123" && this.password == "roastchicken") {
      console.log('Login successful');
      this.router.navigate(['/userselection', '12345']);
    }
    else {
      console.log('Login failed');
      this.loginFailed = true;
    }
  }

}
