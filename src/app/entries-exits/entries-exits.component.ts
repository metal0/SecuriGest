import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MaterialModule } from '../material/material.module';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

export interface DadosTabela {
	name: string;
	date: Date;
	type: string;
}
@Component({
	selector: 'app-entries-exits',
	templateUrl: './entries-exits.component.html',
	styleUrls: [
		'./entries-exits.component.css'
	]
})
export class EntriesExitsComponent implements OnInit {
	private movementsUrl = `${document.location.origin}/api/movements`;
	movements;
	displayedColumns: string[] = [
		'name',
		'date',
		'type'
	];

	applyFilter(filterValue: string) {
		this.movements.filter = filterValue.trim().toLowerCase();
	}
	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

	ngOnInit() {
		this.http.get<any>(this.movementsUrl).subscribe(
			(res) => {
				console.log(res);
				this.movements = new MatTableDataSource(res);
			},
			(err) => {
				console.log(err);
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						this.router.navigate([
							'/login'
						]);
					}
					if (err.status === 500) {
						this.authService.logoutUser();
					}
				}
			}
		);

		// Mudar para base de dados;
	}
}
