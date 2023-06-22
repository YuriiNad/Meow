import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { IBasicFilterItemOptions } from '../../filter.options';
import { NgFor, NgIf } from '@angular/common';
import { BasicFilter } from '../basic-filter';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-amount-results',
	templateUrl: './amount-results.component.html',
	standalone: true,
	imports: [MatRadioModule, NgFor, NgIf, ReactiveFormsModule],
})
export class AmountResultsComponent extends BasicFilter<IBasicFilterItemOptions<number>> {
	@Input() set initValue(val: number) {
		this.amountResults.setValue(val);
	}

	public amountResults = new FormControl();
}
