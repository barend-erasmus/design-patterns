import { SwitchBoard } from './flyweights/switch-board';
import { Line } from './line';

const switchBoard: SwitchBoard = new SwitchBoard(20);

const call1: Line = switchBoard.call();
const call2: Line = switchBoard.call();
const call3: Line = switchBoard.call();

call1.endCall();

const call4: Line = switchBoard.call();

call2.endCall();
call3.endCall();

const call5: Line = switchBoard.call();

call4.endCall();
call5.endCall();
