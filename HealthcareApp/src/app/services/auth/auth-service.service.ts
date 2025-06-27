import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
private readonly USER_KEY = 'currentUser';
  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser$: BehaviorSubject<string | null>;

  constructor() {
    const storedUser = localStorage.getItem(this.USER_KEY);
    this.currentUserSubject = new BehaviorSubject<string | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable() as BehaviorSubject<string | null>;
  }

  login(username: string): void {
    localStorage.setItem(this.USER_KEY, username);
    this.currentUserSubject.next(username);
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): string | null {
    return this.currentUserSubject.value;
  }
}
