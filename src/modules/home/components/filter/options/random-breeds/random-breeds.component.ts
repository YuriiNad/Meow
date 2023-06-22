import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterItemWrapperComponent } from '../../components/options-wrapper/filter-item-wrapper.component';

@Component({
	selector: 'app-random-breeds',
	templateUrl: './random-breeds.component.html',
	imports: [MatCheckboxModule, FilterItemWrapperComponent, ReactiveFormsModule],
	standalone: true,
})
export class RandomBreedsComponent {
	@Input() styleClass: string = '';
	@Output() onSelect = new EventEmitter<boolean>();

	@Input() set initValue(val: boolean) {
		this.randomBreeds.setValue(val);
	}

	public randomBreeds = new FormControl();
}
