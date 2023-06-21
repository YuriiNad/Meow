import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	private readonly _storage: Storage = localStorage;

	public set<T>(key: string, value: T): void {
		if (!key && !value) return;
		this._storage.setItem(key, JSON.stringify(value));
	}

	public get<T>(key: string): T | null {
		const data = this._storage.getItem(key);
		return data ? JSON.parse(data) : null;
	}

	public delete(key: string): void {
		if (!key) return;
		this._storage.removeItem(key);
	}
}
