import { TestBed } from '@angular/core/testing';

import { MaterialsServiceService } from './materials-service.service';

describe('MaterialsServiceService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: MaterialsServiceService = TestBed.get(MaterialsServiceService);
		expect(service).toBeTruthy();
	});
});
