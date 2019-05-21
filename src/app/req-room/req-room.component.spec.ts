import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqRoomComponent } from './req-room.component';

describe('ReqRoomComponent', () => {
	let component: ReqRoomComponent;
	let fixture: ComponentFixture<ReqRoomComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					ReqRoomComponent
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ReqRoomComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
