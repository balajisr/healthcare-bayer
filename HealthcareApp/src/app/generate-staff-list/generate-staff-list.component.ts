import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HealthcareService } from '../healthcare.service';

@Component({
  selector: 'app-generate-staff-list',
  templateUrl: './generate-staff-list.component.html',
  styleUrls: ['./generate-staff-list.component.css']
})
export class GenerateStaffListComponent implements OnInit {
  searchText = '';
  fullName = '';
  staffID= '';
  phoneNumber = '';
  role = '';
  roles: string[] = ['Doctor', 'Nurse', 'Technician', 'Admin'];
  selectedRole: string = this.roles[0];
  shifts: string[] = ['Morning', 'Evening', 'Night'];
  selectedShift: string = this.shifts[0];
  staffList: any[] = [
    { fullName: 'John Doe', staffID: '001', role: 'Doctor', shift: 'Morning', phoneNumber: '123-456-7890' },
    { fullName: 'Jane Smith', staffID: '002', role: 'Nurse', shift: 'Evening', phoneNumber: '987-654-3210' }];
    searchTerm: string = '';
  
  constructor(
    private service: HealthcareService,
    private AuthServiceService: AuthServiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
   }

  ngOnInit(): void {
  }
  filteredStafflist(): any[] {
    if (!this.searchText) {
      return this.staffList;
    }
    const search = this.searchTerm.toLowerCase();
    return this.staffList.filter(item =>
      Object.values(item).some((value: any) => value.toLowerCase().includes(search))
    );
  }
  generateShift(): void {

      this.service.addShiftList(this.fullName, this.staffID, this.phoneNumber, this.selectedRole, this.selectedShift)
        .subscribe(
          response => {
            this.snackBar.open('Staff List sent!', 'Close', { duration: 3000 });
          },
          error => {
            this.snackBar.open('Failed to send List.', 'Close', { duration: 3000 });
            console.error('Error sending list:', error);
          }
        );
    
  }
}
