import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-cat-card',
	templateUrl: './cat-card.component.html',
	styleUrls: ['./cat-card.component.scss'],
	imports: [MatButtonModule, MatCardModule],
	standalone: true,
})
export class CatCardComponent {

}
