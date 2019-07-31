import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Material } from './material.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
	providedIn: 'root'
})
export class MaterialsServiceService {
	private MaterialsUrl = `${document.location.origin}/api/Materials`;
	public formData = new Material();
	public materials: Material[];

	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

	submitMaterial() {
		return this.http.post<any>(this.MaterialsUrl, this.formData);
	}
	getMaterials() {
		this.http.get<any>(this.MaterialsUrl).subscribe(
			(res) => {
				console.log(res);
				this.materials = res;
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
	delMaterial() {}
}
