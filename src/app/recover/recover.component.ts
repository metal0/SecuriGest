import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-recover',
	templateUrl: './recover.component.html',
	styleUrls: [
		'./recover.component.css'
	]
})
export class RecoverComponent implements OnInit {
	user = { email: '' };
	invalidRecover = false;

	constructor(private auth: AuthService, private router: Router) {}

	ngOnInit() {}

	onSubmit() {
		this.auth.recover(this.user).subscribe(
			(res) => {
				this.router.navigate([
					'/login'
				]);
			},
			(err) => {
				this.invalidRecover = true;
			}
		);
	}
}
