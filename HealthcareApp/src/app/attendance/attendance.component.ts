import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../services/attendance/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {

  staffForm: FormGroup;
  staffList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];

  constructor(private fb: FormBuilder, private attendanceService: AttendanceService) {
    this.staffForm = this.fb.group({
      staff: [null, Validators.required],
      date: [null, Validators.required],
      time: '',
      onLeave: [false]
    });
  }

  onSubmit() {
    let date = this.staffForm.value.date;
    if(date) {
      this.staffForm.value.date = date.toString()
    }
    this.attendanceService.submitAttendance(this.staffForm)
    console.log(this.staffForm.value);
  }

}
