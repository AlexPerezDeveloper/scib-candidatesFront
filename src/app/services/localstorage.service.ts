import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })



  export class StorageService {
    private storageKey = 'candidates';
    private storageSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.getStoredData());
  
    constructor() {
        window.addEventListener('storage', this.handleStorageChange.bind(this));
    }
  
    private getStoredData(): any[] {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    }
  
    private handleStorageChange(event: StorageEvent): void {
      if (event.key === this.storageKey) {
        this.storageSubject.next(this.getStoredData());
      }
    }
  
    getStorageObservable(): Observable<any[]> {
      return this.storageSubject.asObservable();
    }
  
    addCandidate(item: any): void {
      const data = this.getStoredData();
      data.push(item);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      this.storageSubject.next(data);
    }
  
   
  }