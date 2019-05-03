import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
	})
export class UserService {
	private usersUrl = `${document.location.origin}/api/users`;
	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get<any>(this.usersUrl);
	}
}
