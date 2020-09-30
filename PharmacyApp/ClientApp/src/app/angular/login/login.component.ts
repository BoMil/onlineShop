import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserAuthService } from '../_services/userAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Setup Form
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  authFailed: boolean = false;
  returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private authentication: UserAuthService,
        private router: Router,
        private route: ActivatedRoute
        ) {
            // redirect to home if already logged in
            if (this.authentication.currentUserValue) {
                this.router.navigate(['/home']);
            }
        }

        ngOnInit() {
            this.createLoginForm();
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          }

          createLoginForm() {
            this.loginForm = this.formBuilder.group({
                username: ['', Validators.required],
                password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
            });
          }

          get f() { return this.loginForm.controls; }

          onSubmit() {
            this.submitted = true;

            if (this.loginForm.invalid){
              return;
            }

            this.loading = true;
            const request = {
                username: this.f.username.value,
                password: this.f.password.value
            };

            this.authentication.login(request)
              .pipe(first())
              .subscribe(
                data => {
                    if (data) {
                        this.router.navigate(['/home']);
                    } else {
                        this.authFailed = true;
                    }
                    console.log(data);
                },
                error => {
                //   this.alertService.error(error);
                  this.loading = false;
                });
          }

}
