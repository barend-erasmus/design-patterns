import { SendEmailCommand } from './commands/send-email';
import { ICommand } from './interfaces/command';

const sendEmailCommand: ICommand = new SendEmailCommand();

sendEmailCommand.execute();

setTimeout(() => {
    sendEmailCommand.undo();
}, 2000);
