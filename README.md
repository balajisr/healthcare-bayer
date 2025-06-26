# healthcare-hcl

---

**Tech Stack**
- Frontend - Angular, Material
- Backend - NodeJS, ExpressJS
- DB - MongoDB

---

**DB Collections**
- Attendance
- ShiftConfigure
- ShiftList
- Shifts




**Backend Changes**

API Lists : 
1. Add Shifts : http://localhost:3000/api/addShifts 
    Method : POST
    Param : {
        name : string,
        shiftFrom : Number,
        shiftTo : Number
    }
    Validation : ShiftTo should be greater than ShiftFrom
    Collection : shifts
    Schema : defined
    error handling : try-catch

2. Get Shifts : http://localhost:3000/api/getShifts 
    Method : GET
    collection : shifts
    error handling - try-catch

3. Configure Shifts : http://localhost:3000/api/configureShifts
    Method : POST
    param : {
        shiftId : Number,
        roleType : String,
        capacity : Number
    }
    collection : shiftconfigure

4. Assigned Staff : http://localhost:3000/api/assignedStaff
    METHOD : POST
    param : {
        staffId : Number,
        slotId : String,
        assignedDate : Date
    }
    collection : slotassign
