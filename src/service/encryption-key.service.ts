// encryption-key.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EncryptionKeyService {
  private appKey = signal<string>('');

  constructor() {
    // You might want to get this from a more secure source
    this.initializeKey();
  }

  private initializeKey(): void {
    // In production, get this from a secure source (backend API, environment variables, etc.)
    const key = 'pacsasdass@2025'; // Replace with your actual key generation logic
    this.appKey.set(key);
  }

  getAppKey(): string {
    return this.appKey();
  }
}
