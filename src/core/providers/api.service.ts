import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnvironmentService } from './environment.service';

type TParams = { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }
type HttpOptions = Parameters<HttpClient['request']>['2'];
type RequestOptions = HttpOptions & { handleError?: boolean };

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private readonly environment = inject(EnvironmentService);
	private readonly http = inject(HttpClient);

	public get<T>(path: string, options: RequestOptions = {}): Observable<T> {
		return this.request<T>('get', path, options);
	}
	private request<T>(method: string, path: string, options: RequestOptions): Observable<T> {
		const { handleError, headers, ...httpOptions } = options;
		const url = this.baseUrl + path;

		return this.http.request(method, url, { ...httpOptions })
			.pipe(
				catchError(error => this.errorHandler(error, handleError)),
			)
	}

	public setParamsFromObj(obj: TParams): HttpParams {
		const params = new HttpParams({
			fromObject: obj,
			encoder: new HttpUrlEncodingCodec(),
		})

		return params;
	}

	private errorHandler(error: HttpErrorResponse, handleError: boolean = false): Observable<never> {
		if (handleError) {
			//Handel error logic here if need;
		}

		return throwError(() => new Error(error?.message));
	}


	private get baseUrl(): string {
		return this.environment.get('apiUrl');
	}

}
