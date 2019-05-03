import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
	})
export class LoginComponent implements OnInit {
	user = { email: '', password: '' };
	invalidLogin = false;

	constructor(private auth: AuthService, private router: Router) {}

	ngOnInit() {}

	onSubmit() {
		this.auth.loginUser(this.user).subscribe(
			res => {
				localStorage.setItem('token', res.token);
				this.router.navigate(['/users']);
			},
			err => {
				this.invalidLogin = true;
			}
		);
	}
}
