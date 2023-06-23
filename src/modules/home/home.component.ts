import { Component, inject } from '@angular/core';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { CatService } from './providers/cat.service';
import { AsyncPipe, JsonPipe, NgIf, NgFor } from '@angular/common';
import { FilterService } from './providers/filter.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { getColumns } from 'src/core/helpers/grid.helper';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [CatCardComponent, NgIf, NgFor, MatGridListModule, ReactiveFormsModule, AsyncPipe, JsonPipe, MatFormFieldModule, MatSelectModule],
	standalone: true,
})
export default class HomeComponent {
	private readonly catService = inject(CatService);
	private readonly filter = inject(FilterService);

	constructor() {
		this.filter.trackFilterOptionsChange()
	}

	public readonly cols = getColumns();
	public cats$ = this.catService.getImages().pipe(tap(console.log));
}
