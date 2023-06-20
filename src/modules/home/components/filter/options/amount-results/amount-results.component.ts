import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { IBasicFilterItemOptions } from '../../filter.options';
import { NgFor, NgIf } from '@angular/common';
import { BasicFilter } from '../basic-filter';

@Component({
	selector: 'app-amount-results',
	templateUrl: './amount-results.component.html',
	standalone: true,
	imports: [MatRadioModule, NgFor, NgIf],
})
export class AmountResultsComponent extends BasicFilter<IBasicFilterItemOptions<number>> {
	public get initValue(): number { //TODO: initial value from local storage
		return this.options[0].value;
	}
}
