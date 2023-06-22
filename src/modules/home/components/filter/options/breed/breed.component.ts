import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { BasicFilter } from '../basic-filter';
import { IBasicFilterItemOptions } from '../../filter.options';

@Component({
	selector: 'app-breed',
	templateUrl: './breed.component.html',
	imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, NgIf, NgFor],
	standalone: true,
})
export class BreedComponent extends BasicFilter<IBasicFilterItemOptions<string>> {
	@Input() set disabled(val: boolean | null) {
		if (val) {
			this.breed.disable();
		} else {
			this.breed.enable();
		}
	}

	@Input() set initValue(val: any) {
		this.breed.setValue(val);
	}

	public readonly breed = new FormControl(this.initValue);
}