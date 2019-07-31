import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MaterialModule } from '../material/material.module';

export interface DadosTabela {
	name: string;
	date: Date;
	type: string;
}

const ELEMENT_DATA: DadosTabela[] = [
	{ name: 'Hydrogen', date: new Date(), type: 'E' },
	{ name: 'Helium', date: new Date(2123232323232), type: 'S' },
	{ name: 'Lithium', date: new Date(21232), type: 'E' },
	{ name: 'Beryllium', date: new Date(2121233), type: 'S' },
	{ name: 'Boron', date: new Date(), type: 'S' },
	{ name: 'Carbon', date: new Date(2123232323232), type: 'E' },
	{ name: 'Nitrogen', date: new Date(2123232323232), type: 'E' },
	{ name: 'Oxygen', date: new Date(253542452), type: 'S' },
	{ name: 'Fluorine', date: new Date(34524532), type: 'S' },
	{ name: 'Neon', date: new Date(235463486), type: 'S' }
];

@Component({
	selector: 'app-entries-exits',
	templateUrl: './entries-exits.component.html',
	styleUrls: [
		'./entries-exits.component.css'
	]
})
export class EntriesExitsComponent implements OnInit {
	dataSource;
	displayedColumns: string[] = [
		'name',
		'date',
		'type'
	];

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	constructor() {}

	ngOnInit() {
		this.dataSource = new MatTableDataSource(ELEMENT_DATA);
		// Mudar para base de dados;
	}
}
