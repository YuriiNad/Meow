import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { PROVIDERS } from './core/global/tokens';
import { ROOT_ROUTES } from './core/routing';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';
import { Provider } from '@angular/core';
import { MATERIAL_COMPONENTS_CONFIGS } from './core/providers/material-configs.service';

const INTERCEPTORS: Provider[] = [
	{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
]

bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(
			withInterceptorsFromDi(),
		),
		provideAnimations(),
		provideRouter([...ROOT_ROUTES], withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
		BrowserModule,
		...PROVIDERS,
		...INTERCEPTORS,
		...MATERIAL_COMPONENTS_CONFIGS,
	]
}).catch(e => console.error(e));