import { Component, OnInit } from '@angular/core';
import { RoomsServiceService } from '../rooms-service.service';
import { NgForm } from '@angular/forms';
import { Room } from '../room.model';

@Component({
	selector: 'app-room',
	templateUrl: './room.component.html',
	styleUrls: [
		'./room.component.css'
	]
})
export class RoomComponent implements OnInit {
	form: NgForm;
	constructor(private service: RoomsServiceService) {}

	ngOnInit() {
		this.resetForm(this.form);
	}

	resetForm(form: NgForm) {
		if (form != null) form.resetForm;

		this.service.formData = {
			number: 5,
			pavilion: '',
			type: ''
		};
	}
	onSubmit(form: NgForm) {
		this.service.formData.number = 2;
	}
}
