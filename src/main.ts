import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { PROVIDERS } from './core/global/tokens';


bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(),
		provideAnimations(),
		provideRouter([], withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
		BrowserModule,
		...PROVIDERS,
	]
}).catch(e => console.error(e));