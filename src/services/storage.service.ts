import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public saveToStorage = (key: string, value: any) => {
    const data: any = JSON.stringify(value) || null;
    localStorage.setItem(key, data);
  };

  public loadFromStorage = (key: string) => {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  };
}
