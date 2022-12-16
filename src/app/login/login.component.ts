import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  msgError = '';

  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  login (){
    if (this.username.trim().length === 0) {
      this.msgError = 'Username field cant be empty!'
    }else if (this.password.trim().length === 0) {
      this.msgError = 'Password field cant be empty!'
    }else{
      this.msgError = ""
      let res = this.auth.login(this.username, this.password)
      
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.msgError = "Invalid Credentials";
      }
    }
  }



}
