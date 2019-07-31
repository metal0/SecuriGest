import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Room } from './room.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Injectable({
	providedIn: 'root'
})
export class RoomsServiceService {
	private roomsUrl = `${document.location.origin}/api/rooms`;
	public formData: Room;
	public rooms: Room[];

	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

	submitRoom() {
		return this.http.post<any>(this.roomsUrl, this.formData);
	}
	getRooms() {
		this.http.get<any>(this.roomsUrl).subscribe(
			(res) => {
				console.log(res);
				this.rooms = res;
			},
			(err) => {
				console.log(err);
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						this.router.navigate([
							'/login'
						]);
					}
					if (err.status === 500) {
						this.authService.logoutUser();
					}
				}
			}
		);
	}
}
