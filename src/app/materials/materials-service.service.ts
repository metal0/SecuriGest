import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Material } from './material.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
	providedIn: 'root'
})
export class MaterialsServiceService {
	private MaterialsUrl = `${document.location.origin}/api/materials`;
	public formData = new Material();
	public oldFormData: Material;
	public materials: Material[];
	handleError: any;

	constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

	submitMaterial() {
		console.log('submitMaterial');
		console.log(this.oldFormData);
		console.log(this.formData);
		if (this.oldFormData) {
			/*     modificar material*/
			const body = {
				formData: this.formData,
				oldFormData: this.oldFormData
			};
			return this.http.put<any>(this.MaterialsUrl, body);
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
	delMaterial(material) {
		// console.log(material);
		// const httpParams = new HttpParams().set('number', material.number);
		// httpParams.set('type', material.type);
		// console.log(httpParams);
		// const options = {
		// 	headers: new HttpHeaders({
		// 		'Content-Type': 'application/json'
		// 	}),
		// 	params: httpParams
		// };
		// console.log(options);
		this.http.delete<any>(this.MaterialsUrl + '/' + material._id).subscribe(
			(res) => {
				this.getMaterials();
			},
			(err) => {}
		);
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
