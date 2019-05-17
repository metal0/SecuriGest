import { Component, OnInit } from '@angular/core';
import { RoomsServiceService } from '../rooms-service.service';
@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: [
		'./room-list.component.css'
	]
})
export class RoomListComponent implements OnInit {
	constructor(public service: RoomsServiceService) {}

	ngOnInit() {}
}
