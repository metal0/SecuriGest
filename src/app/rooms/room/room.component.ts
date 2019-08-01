import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomsServiceService } from '../rooms-service.service';
import { FormGroup, FormControl, Validators, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
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
	@ViewChild('number') number: NgModel;
	constructor(public service: RoomsServiceService, private router: Router) {}

	ngOnInit() {
		this.resetForm(this.form);
	}

	resetForm(form: NgForm) {
		if (form != null) {
			form.resetForm();
		}
		this.service.oldRoom = new Room();
	}
	onSubmit() {
		this.service.submitRoom().subscribe(
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
