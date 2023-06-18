import { Injectable, inject } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../providers/environment.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
	private readonly env = inject(EnvironmentService);
	private readonly apiKey = this.env.get('apiKey');

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const adjustedRequest = request.clone({ setHeaders: { 'x-api-key': this.apiKey } });

		return next.handle(adjustedRequest);
	}
}
