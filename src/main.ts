import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';


bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(),
		provideAnimations(),
		provideRouter([], withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
		importProvidersFrom([
		]),
		BrowserModule,
	]
}).catch(e => console.error(e));