import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-cat-card',
	templateUrl: './cat-card.component.html',
	styleUrls: ['./cat-card.component.scss'],
	imports: [MatButtonModule, MatCardModule, NgOptimizedImage],
	standalone: true,
})
export class CatCardComponent {
	@Input() imgUrl!: string;
}
