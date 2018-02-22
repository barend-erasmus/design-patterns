import { ILeaveApprover } from './interfaces/leave-approver';

export class DepartmentManager implements ILeaveApprover {

    public approve(employeeNumber: number): void {
        console.log('Approve by Department Manager.');
    }
}
