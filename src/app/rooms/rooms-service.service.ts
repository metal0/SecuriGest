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
	private roomModifyUrl = `${document.location.origin}/api/roomsmodify`;
	private roomsDeleteUrl = `${document.location.origin}/api/roomsmodify`;
	public formData = new Room();
	public oldRoom = new Room();
	public rooms: Room[];

	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

	submitRoom() {
		if (!this.oldRoom.number) {
			return this.http.post<any>(this.roomsUrl, this.formData);
		} else {
			return this.http.post<any>(this.roomModifyUrl, this.formData);
		}
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
	delRoom(room) {
		console.log(room);
		console.log(this.roomsDeleteUrl);
		return this.http.post<any>(this.roomsDeleteUrl, room);
	}
}
