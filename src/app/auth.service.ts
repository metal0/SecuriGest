import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private registerUrl = `${document.location.origin}/api/users`;
	private loginUrl = `${document.location.origin}/api/login`;
	private recoverUrl = `${document.location.origin}/api/recover`;
	constructor(private http: HttpClient, private router: Router) {}

	registerUser(user) {
		return this.http.post<any>(this.registerUrl, user);
	}

	loginUser(user) {
		return this.http.post<any>(this.loginUrl, user);
	}

	logoutUser() {
		localStorage.removeItem('token');
		this.router.navigate([
			'/'
		]);
	}

	loggedIn() {
		return !!localStorage.getItem('token');
	}

	getToken() {
		return localStorage.getItem('token');
	}

	recover(user) {
		return this.http.post<any>(this.recoverUrl, user);
	}
}
