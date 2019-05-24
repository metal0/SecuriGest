import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
	})
export class UserService {
	private usersUrl = `${document.location.origin}/api/users`;
	private userCUrl = `${document.location.origin}/api/user`;
	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get<any>(this.usersUrl);
	}
	createUser(user){
		return this.http.post<any>(this.userCUrl,user);}
}
