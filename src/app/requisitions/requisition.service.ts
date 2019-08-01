import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
	providedIn: 'root'
})
export class RequisitionService {
	private MaterialsUrl = `${document.location.origin}/api/Materials`;
	materiais: [];
	materiaisadd: [];
	utilizador: string;
	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

	getMaterials() {
		this.http.get<any>(this.MaterialsUrl).subscribe(
			(res) => {
				console.log(res);
				this.materiaisadd = res;
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
	}
}
