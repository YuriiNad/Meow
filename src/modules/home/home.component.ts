import { Component } from '@angular/core';
import { CatCardComponent } from './components/cat-card/cat-card.component';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [CatCardComponent],
	standalone: true,
})
export default class HomeComponent {

}
