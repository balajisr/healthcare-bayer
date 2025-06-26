export interface Staff {
    id: number;
    name: string;
    staffId: string;
    role: 'Doctor' | 'Nurse' | 'Receptionist' | 'Technician';
    department: string;
    availability: string;
    shift: string;
    contact: string;
}