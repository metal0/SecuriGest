import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
	selector: 'app-movement',
	templateUrl: './movement.component.html',
	styleUrls: [
		'./movement.component.css'
	]
})
export class MovementComponent implements OnInit {
	constructor(private http: HttpClient) {}

	ngOnInit() {}
	submeterMovimento() {}
}
