import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {setBearerToken} from "../bearer-token";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    identifier: this.fb.group({
      type: this.fb.control("m.id.user"),
      user: this.fb.control('nginx', Validators.required),
    }),
    initial_device_display_name: this.fb.control(''),
    password: this.fb.control('nginx2022', Validators.required),
    type: this.fb.control('m.login.password')
  });

  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private _router: Router
  ) {
  }

  submit() {
    if (this.loginForm.valid) {
    }
    this._authService.login(this.loginForm.getRawValue())
      .subscribe(
        data => {
          setBearerToken(data.access_token);
          this._router.navigateByUrl("");
        }
      )
  }

}
