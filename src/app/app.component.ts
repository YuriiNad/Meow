import { Component } from '@angular/core';
import { MainComponent } from 'src/core/components/main/main.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	imports: [MainComponent],

	standalone: true
})
export class AppComponent {
	title = 'meow';
}
