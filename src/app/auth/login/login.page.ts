import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  public credentials: User = {
    Usuario: '',
    Password: ''
  };
  constructor(
      private authService: AuthService,
      private fb: FormBuilder,
      private alert: AlertController,
      private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group(
        {
          usuario: new FormControl(''),
          password: new FormControl('')
        }
    );
  }

  login() {
    this.credentials.Usuario = this.formLogin.get('usuario').value;
    this.credentials.Password = this.formLogin.get('password').value;
    this.authService.login(this.credentials)
        .subscribe(
            response => {
                const key = 'token';
                localStorage.setItem('token', response[key]);
                console.log(localStorage.getItem('token'))
                this.router.navigate(['/tabs']);
            },
            async error => {
                localStorage.setItem('token', '');
                const alert = await this.alert.create({
                    header: 'Acceso!',
                    message: 'Credenciales no válidas',
                    buttons: ['Ok']
                });
                await alert.present();
            }
        );
  }

}
