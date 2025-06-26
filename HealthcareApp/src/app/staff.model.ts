export interface staff {
    fullName: string;
    staffID: string;
    selectedRole: string;
    selectedShift: string;
    phoneNumber: string;
}

export interface shiftData {
    role: string[];
    notifications: string[];
}