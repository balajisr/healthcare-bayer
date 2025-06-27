import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AttendanceService {
private apiUrl = 'http://localhost:3000/api';
    constructor(private http: HttpClient) { }

    submitAttendance(attendanceData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/attendance`, attendanceData);
    }
}
