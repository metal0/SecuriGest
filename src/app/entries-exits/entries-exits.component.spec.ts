import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesExitsComponent } from './entries-exits.component';

describe('EntriesExitsComponent', () => {
	let component: EntriesExitsComponent;
	let fixture: ComponentFixture<EntriesExitsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					EntriesExitsComponent
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(EntriesExitsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
