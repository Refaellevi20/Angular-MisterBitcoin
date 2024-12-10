import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) {}

  private DB_KEY = 'UserDB';
  private _loggedInUser$ = new BehaviorSubject<User | null>(null);
  public loggedInUser$ = this._loggedInUser$.asObservable();

  public getLoggedInUser(): void {
    let loggedInUser!: User;
    loggedInUser = this.storageService.loadFromStorage(this.DB_KEY);
    if (!loggedInUser) {
      loggedInUser = {
        _id: 'u101',
        name: 'Srulik Johanson',
        balance: 200,
        transactions: [],
      };
    }
    this._save(loggedInUser)
  }

  signup(name: string): void {
    const newUser: User = {
      _id: 'u102',
      name,
      balance: 200,
      transactions: [],
    };
    this._save(newUser)
  }

  private _save(user: User) {
    this.storageService.saveToStorage(this.DB_KEY, user)
    this._loggedInUser$.next({ ...user })
  }

  public checkLoggedIn() {
    let loggedInUser: User | undefined = this.storageService.loadFromStorage(
      this.DB_KEY
    )
    if (!loggedInUser) return false
    return true
  }
}

