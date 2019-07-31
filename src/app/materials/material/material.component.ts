import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialsServiceService } from '../materials-service.service';
import { FormGroup, FormControl, Validators, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-material',
	templateUrl: './material.component.html',
	styleUrls: [
		'./material.component.css'
	]
})
export class MaterialComponent implements OnInit {
	form: NgForm;
	@ViewChild('number') number: NgModel;
	constructor(public service: MaterialsServiceService, private router: Router) {}

	ngOnInit() {
		this.resetForm(this.form);
	}

	resetForm(form: NgForm) {
		if (form != null) {
			form.resetForm();
		}
	}
	onSubmit() {
		this.service.submitMaterial().subscribe(
			(res) => {
				this.router.navigate([
					'/materials'
				]);
			},
			(err) => {
				this.number.control.setErrors({ conflict: true });
			}
		);
	}
}
