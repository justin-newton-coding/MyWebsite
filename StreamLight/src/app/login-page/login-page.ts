import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {

  username: string = '';
  password: string = '';
  
  loginFailed: boolean = false;

  login() {
    console.log('Login button clicked');

    if(this.username == "johncena123" && this.password == "roastchicken") {
      console.log('Login successful');
      this.loginFailed = false;
    }
    else {
      console.log('Login failed');
      this.loginFailed = true;
    }
  }

}
