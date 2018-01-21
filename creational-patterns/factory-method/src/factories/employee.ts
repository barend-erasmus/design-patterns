import { IEmployee } from '../interfaces/employee';
import { FullTimeEmployee } from '../models/full-time';
import { PartTimeEmployee } from '../models/part-time';

export class EmployeeFactory {

    public getEmployee(type: string): IEmployee {
        switch (type) {
            case 'full-time':
                return new FullTimeEmployee();
            case 'part-time':
                return new PartTimeEmployee();
            default:
                return null;
        }
    }
}
