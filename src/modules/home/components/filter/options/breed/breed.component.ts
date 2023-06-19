import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, Provider } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { IBreedOption } from '../../filter.component';

const FORM_FIELD_OPTIONS: Provider[] = [
	{
		provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
		useValue: {
			subscriptSizing: 'dynamic'
		}
	}
]

@Component({
	selector: 'app-breed',
	templateUrl: './breed.component.html',
	providers: [...FORM_FIELD_OPTIONS],
	imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, NgIf, NgFor],
	standalone: true,
})
export class BreedComponent<T> {
	@Input({ required: true }) options!: IBreedOption<T>[];
	@Input({ required: true }) initValue!: T;
	@Output() onSelect = new EventEmitter<T>();

	public readonly breed = new FormControl();
}