import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
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
	public readonly breed = new FormControl(); //TODO: Initial value;
}