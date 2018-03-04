import { ICommand } from '../interfaces/command';

export class SendEmailCommand implements ICommand {

    public execute(): void {
        console.log('Sending email...');
    }

    public undo(): void {
        console.log('Undoing email...');
    }
}
