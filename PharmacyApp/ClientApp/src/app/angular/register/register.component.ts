import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/userAuth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    // Setup Form
    registerForm: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authentication: UserAuthService
    ) {
        // redirect to home if already logged in
        // if (this.authentication.currentUserValue) {
        //     this.router.navigate(['/home']);
        // }
    }

    ngOnInit() {
        this.createSignupForm();
    }

    /**
     * @name createSignupForm
     * @description It will create register form and setup basic validation
     */
    createSignupForm() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            confirmPassword: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    /**
     * @name submit
     * @description If validation pass, it will send user details to the backend API
     * and redirect to login page
     */
    submit() {
        this.submitted = true;
        const arePasswordsEqual: boolean = (this.f.confirmPassword.value === this.f.password.value);

        if (this.registerForm.invalid || !arePasswordsEqual) {
            return;
        }

        // Create User object
        const user = {
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            username: this.f.username.value,
            password: this.f.password.value,
            email: this.f.email.value,
            type: 'user'
        };

        this.authentication.register(user).subscribe(
            data => {
                console.log(data);
                // this.alertService.success('Registration successful', true);
                this.router.navigate(['/home']);
            },
            error => {
                console.log(error);
                // this.alertService.error(error);
            }
        );
    }

}
