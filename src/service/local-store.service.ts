// local-store.service.ts
import { Injectable, signal, computed } from '@angular/core';
import CryptoJS from 'crypto-js';
import { EncryptionKeyService } from './encryption-key.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  private encryptionKey = signal<string>(''); // Default key, can be changed
  // Update the constructor in LocalStoreService
  constructor(private encryptionKeyService: EncryptionKeyService) {
    this.setEncryptionKey(this.encryptionKeyService.getAppKey());
  }
  // Set the encryption key (call this once at app startup)
  setEncryptionKey(key: string): void {
    this.encryptionKey.set(key);
  }

  // Store data with encryption
  setItem(key: string, value: any): void {
    try {
      const encryptedValue = CryptoJS.AES.encrypt(
        JSON.stringify(value),
        this.encryptionKey(),
      ).toString();
      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error('Error encrypting data:', error);
      throw new Error('Failed to encrypt and store data');
    }
  }

  // Retrieve and decrypt data
  getItem<T>(key: string): T | null {
    try {
      const encryptedValue = localStorage.getItem(key);
      if (!encryptedValue) return null;

      const decryptedBytes = CryptoJS.AES.decrypt(
        encryptedValue,
        this.encryptionKey(),
      );
      const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedValue) as T;
    } catch (error) {
      console.error('Error decrypting data:', error);
      return null;
    }
  }

  // Remove item from storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all encrypted items (only those encrypted with our service)
  clear(): void {
    Object.keys(localStorage).forEach((key) => {
      try {
        // Try to decrypt to verify it was encrypted by us
        this.getItem(key);
        localStorage.removeItem(key);
      } catch {
        // Not our data, skip
      }
    });
  }

  // Check if key exists
  hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  addToArray<T>(key: string, value: T): void {
    try {
      const currentArray = this.getArray<T>(key) || [];
      currentArray.push(value);

      const encryptedValue = CryptoJS.AES.encrypt(
        JSON.stringify(currentArray),
        this.encryptionKey(),
      ).toString();

      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error('Error encrypting array data:', error);
      throw new Error('Failed to encrypt and store array data');
    }
  }

  // Get the entire array
  getArray<T>(key: string): T[] | null {
    try {
      const encryptedValue = localStorage.getItem(key);
      if (!encryptedValue) return null;

      const decryptedBytes = CryptoJS.AES.decrypt(
        encryptedValue,
        this.encryptionKey(),
      );
      const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedValue) as T[];
    } catch (error) {
      console.error('Error decrypting array data:', error);
      return null;
    }
  }

  // Remove specific item from array by index
  removeFromArray(key: string, index: number): void {
    try {
      const currentArray = this.getArray<any>(key);
      if (!currentArray || index < 0 || index >= currentArray.length) return;

      currentArray.splice(index, 1);

      const encryptedValue = CryptoJS.AES.encrypt(
        JSON.stringify(currentArray),
        this.encryptionKey(),
      ).toString();

      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error('Error removing item from array:', error);
    }
  }

  // Update specific item in array
  updateInArray<T>(key: string, index: number, newValue: T): void {
    try {
      const currentArray = this.getArray<any>(key);
      if (!currentArray || index < 0 || index >= currentArray.length) return;

      currentArray[index] = newValue;

      const encryptedValue = CryptoJS.AES.encrypt(
        JSON.stringify(currentArray),
        this.encryptionKey(),
      ).toString();

      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error('Error updating item in array:', error);
    }
  }

  // Clear the entire array for a key
  clearArray(key: string): void {
    localStorage.removeItem(key);
  }
}
