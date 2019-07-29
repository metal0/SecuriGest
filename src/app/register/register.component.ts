import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [
		'./register.component.css'
	]
})
export class RegisterComponent implements OnInit {
	@ViewChild('email') email: NgModel;
	user = { email: '', password: '' };
	constructor(private auth: AuthService, private router: Router) {}
	ngOnInit() {
		console.log(this.email);
	}
	onSubmit() {
		this.auth.registerUser(this.user).subscribe(
			(res) => {
				localStorage.setItem('token', res.token);
				this.router.navigate([
					'/users'
				]);
			},
			(err) => {
				this.email.control.setErrors({ conflict: true });
			}
		);
	}
}
