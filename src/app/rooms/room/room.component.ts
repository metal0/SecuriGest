import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomsServiceService } from '../rooms-service.service';
import { FormGroup, FormControl, Validators, NgForm, NgModel } from '@angular/forms';
import { Room } from '../room.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-room',
	templateUrl: './room.component.html',
	styleUrls: [
		'./room.component.css'
	]
})
export class RoomComponent implements OnInit {
	form: NgForm;
	@ViewChild('number') number: NgModel;
	room = { pavilion: '', number: '', type: '' };
	constructor(public service: RoomsServiceService, private router: Router) {}

	ngOnInit() {
		this.resetForm(this.form);
	}

	resetForm(form: NgForm) {
		if (form != null) {
			form.resetForm();
		}
	}
	onSubmit() {
		this.service.submitRoom(this.room).subscribe(
			(res) => {
				this.router.navigate([
					'/rooms'
				]);
			},
			(err) => {
				this.number.control.setErrors({ conflict: true });
			}
		);
	}
}
