import { Component, OnInit } from '@angular/core';
import { RequisitionService } from './requisition.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm, NgModel } from '@angular/forms';

@Component({
	selector: 'app-requisitions',
	templateUrl: './requisitions.component.html',
	styleUrls: [
		'./requisitions.component.css'
	]
})
export class RequisitionsComponent implements OnInit {
	constructor(public service: RequisitionService, private router: Router) {}
	ngOnInit() {
		this.service.getMaterials();
	}

	onSubmit() {}
}
