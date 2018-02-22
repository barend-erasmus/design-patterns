import { ILeaveApprover } from './interfaces/leave-approver';
import { OfficeManager } from './office-manager';

export class EmployeeManager implements ILeaveApprover {

    public successor: ILeaveApprover = new OfficeManager();

    public approve(employeeNumber: number): void {
        console.log('Employee Manager cannot approve leave.');
        this.successor.approve(employeeNumber);
    }
}
