import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	})
export class AppComponent {
	title = 'securi-gest';

	constructor(private authService: AuthService) {}
}
