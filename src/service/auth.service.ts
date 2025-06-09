// auth.service.ts
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { roles } from '../constants/enumdata';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Dummy users data
  private dummyUsers: User[] = [
    {
      id: '1',
      username: 'admin',
      password: 'admin123',
      role: roles.ADMIN,
      name: 'System Admin',
      email: 'admin@example.com'
    },
    {
      id: '2',
      username: 'user',
      password: 'user123',
      role: roles.USER,
      name: 'Regular User',
      email: 'user@example.com'
    },
    {
      id: '3',
      username: 'account',
      password: 'account123',
      role: roles.ACCOUNTS,
      name: 'Accounts User',
      email: 'accounts@example.com'
    }
  ];

  // Signal for current user
  currentUser = signal<User | null>(null);
  isAuthenticated = signal(false);

  constructor(private router: Router) {
    // Check localStorage on init
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser.set(JSON.parse(storedUser));
      this.isAuthenticated.set(true);
    }
  }

  login(username: string, password: string): boolean {
    const user = this.dummyUsers.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUserRole(): string | null {
    return this.currentUser()?.role || null;
  }
}