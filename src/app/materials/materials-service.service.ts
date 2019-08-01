import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Material } from './material.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
	providedIn: 'root'
})
export class MaterialsServiceService {
	private MaterialsUrl = `${document.location.origin}/api/Materials`;
	private MaterialsDeleteUrl = `${document.location.origin}/api/materialdel`;
	public formData = new Material();
	public oldFormData = new Material();
	public materials: Material[];
	handleError: any;

	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

	submitMaterial() {
		if (this.oldFormData) {
			/*     modificar material*/
		} else {
			return this.http.post<any>(this.MaterialsUrl, this.formData);
		}
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
	delMaterial(material: Material) {
		console.log(material);
		console.log(this.MaterialsDeleteUrl);
		return this.http.post<any>(this.MaterialsDeleteUrl, material);
	}
	/* MARTIM AJUDA ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
	delMaterial(material: Material) {
		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			}),
			body: material
		};

༼ つ ಥ_ಥ ༽つ
		return this.http
			.delete(this.MaterialsUrl, options)
			.map((response: Response) => response)
			.toPromise()
			.catch(this.handleError);
	}
	*/
}
