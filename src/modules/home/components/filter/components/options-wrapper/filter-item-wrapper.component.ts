import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
	selector: 'app-filter-item-wrapper',
	templateUrl: './filter-item-wrapper.component.html',
	styleUrls: ['./filter-item-wrapper.component.scss'],
	imports: [MatExpansionModule, NgIf],
	standalone: true,
})
export class FilterItemWrapperComponent {
	@Input({ required: true }) title!: string;
	@Input() quantity!: number;

	public isOpen = true;
}
