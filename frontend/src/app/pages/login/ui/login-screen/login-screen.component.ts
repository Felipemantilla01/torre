import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';
import userActions from 'src/app/store/user/user.actions';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  hidePassword: Boolean = true;
  user: User = {
    isLogged: false,
    picture: '',
  };
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private notifications: MatSnackBar,
    private store: Store<{ userState: User }>
  ) {
    this.loginForm = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async ngOnInit() {}

  async handleSignIn() {
    if (this.loginForm.valid) {
      this.user.email = this.loginForm.value.user;
      this.user.password = this.loginForm.value.password;

      try {
        const response = await this.loginService.singIn(this.user);
        this.user.id = response.user?.uid;
        this.store.dispatch(userActions.userSetInfo(this.user));
        this.store.dispatch(userActions.userLogin());
        this.router.navigate(['home']);
      } catch (error) {
        this.notifications.open(
          error.message || 'Bad credentials, try again',
          'Ok',
          {
            duration: 4000,
          }
        );
      }
    } else {
    }
  }
  async handleSignUp() {
    if (this.loginForm.valid) {
      this.user.email = this.loginForm.value.user;
      this.user.password = this.loginForm.value.password;

      try {
        const response = await this.loginService.signUp(this.user);
        console.log(response);
        if (!response.error) {
          this.notifications.open('User created successfully', 'Ok', {
            duration: 4000,
          });
          this.handleSignIn();
        } else {
          const data = response.data as { message: string };
          this.notifications.open(data.message || 'Error creating user', 'Ok', {
            duration: 4000,
          });
        }
      } catch (error) {
        this.notifications.open(error.message || 'Error creating user', 'Ok', {
          duration: 4000,
        });
      }
    } else {
    }
  }
}
