import { DepartmentManager } from './department-manager';
import { ILeaveApprover } from './interfaces/leave-approver';

export class OfficeManager implements ILeaveApprover {

    public successor: ILeaveApprover = new DepartmentManager();

    public approve(employeeNumber: number): void {
        console.log('Office Manager cannot approve leave.');
        this.successor.approve(employeeNumber);
    }
}
