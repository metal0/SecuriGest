import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NgForm } from '@angular/forms';
export interface SelectOp {
	value: string;
}

@Component({
	selector: 'app-req-room',
	templateUrl: './req-room.component.html',
	styleUrls: [
		'./req-room.component.css'
	]
})
export class ReqRoomComponent implements OnInit {
	form: NgForm;
	types: SelectOp[];
	pavilions: SelectOp[];
	constructor() {}

	ngOnInit() {
		this.resetForm(this.form);
		this.pavilions = [
			{ value: 'A' },
			{ value: 'B' },
			{ value: 'C' }
		];
		this.types = [
			{ value: 'Aula' },
			{ value: 'Reunião' },
			{ value: 'Evento' },
			{ value: 'Drena' }
		];
		/**
		 * trocar por base de dados
		 */
	}
	resetForm(form: NgForm) {
		if (form != null) {
			console.log(form);
			form.resetForm();
		}
	}
	onSubmit(form: NgForm) {
		alert('ola');
		console.log(form);
	}
}
