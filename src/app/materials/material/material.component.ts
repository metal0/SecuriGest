import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialsServiceService } from '../materials-service.service';
import { FormGroup, FormControl, Validators, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Material } from '../material.model';

@Component({
	selector: 'app-material',
	templateUrl: './material.component.html',
	styleUrls: [
		'./material.component.css'
	]
})
export class MaterialComponent implements OnInit {
	@ViewChild('number') number: NgModel;
	@ViewChild('form') form: NgForm;
	constructor(public service: MaterialsServiceService, private router: Router) {}

	ngOnInit() {
		this.resetForm();
	}

	resetForm() {
		this.form.resetForm();
		this.service.oldFormData = null;
		this.service.formData = new Material();
	}
	onSubmit() {
		this.service.submitMaterial().subscribe(
			(res) => {
				this.resetForm();
				this.service.getMaterials();
			},
			(err) => {
				this.number.control.setErrors({ conflict: true });
			}
		);
	}
}
