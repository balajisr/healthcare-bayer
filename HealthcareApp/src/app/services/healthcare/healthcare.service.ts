import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface shiftData {
    role: string[];
    notifications: string[];
}
export interface staff {
  fullName: string;
  staffID: string;
  selectedRole: string;
  selectedShift: string;
  phoneNumber: string;
}
@Injectable({
  providedIn: 'root'
})

export class HealthcareService {
private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getShiftData(username: string): Observable<shiftData> {
    return this.http.get<shiftData>(`${this.apiUrl}/user-data/${username}`);
  }

  addShiftList(fullName: string, staffID: string,phoneNumber:string, selectedRole:string, selectedShift: string): Observable<staff> {
    return this.http.post<staff>(`${this.apiUrl}/addShiftList`, { fullName, staffID,phoneNumber, selectedRole, selectedShift });
  }
}
