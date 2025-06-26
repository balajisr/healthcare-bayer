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
  
  constructor(
    private service: HealthcareService,
    private AuthServiceService: AuthServiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
   }

  ngOnInit(): void {
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
