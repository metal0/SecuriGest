import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class RoomsServiceService {
	private roomsUrl = `${document.location.origin}/api/rooms`;

	constructor(private http: HttpClient) {}

	submitRoom(room) {
		return this.http.post<any>(this.roomsUrl, room);
	}
	getRooms() {
		return this.http.get<any>(this.roomsUrl);
	}
}
