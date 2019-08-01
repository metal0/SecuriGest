import { Component, OnInit } from '@angular/core';
import { MaterialsServiceService } from '../materials-service.service';
import { Material } from '../material.model';

@Component({
	selector: 'app-material-list',
	templateUrl: './material-list.component.html',
	styleUrls: [
		'./material-list.component.css'
	]
})
export class MaterialListComponent implements OnInit {
	constructor(public service: MaterialsServiceService) {}

	ngOnInit() {
		console.log('onInit');
		this.service.getMaterials();
		console.log('OnInit');
		console.log(this.service.materials);
	}
	deleteMat(material) {
		this.service.delMaterial(material);
	}
}
