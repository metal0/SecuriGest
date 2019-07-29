import { Component, OnInit } from '@angular/core';
import { RoomsServiceService } from '../rooms-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: [
		'./room-list.component.css'
	]
})
export class RoomListComponent implements OnInit {
	rooms = [];
	constructor(public service: RoomsServiceService, private authService: AuthService, private router: Router) {}

	ngOnInit() {
		this.service.getRooms().subscribe(
			(res) => (this.rooms = res),
			(err) => {
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
