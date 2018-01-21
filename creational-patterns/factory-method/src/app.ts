import { EmployeeFactory } from './factories/employee';
import { IEmployee } from './interfaces/employee';

const factory: EmployeeFactory = new EmployeeFactory();

const employee: IEmployee = factory.getEmployee('full-time');

console.log(employee.toString());
