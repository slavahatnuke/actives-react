import {Box} from 'actives';

import Timer from './Timer';
import TimerService from './TimerService';

let box = new Box;

box.add('Timer', Timer);
box.add('TimerService', TimerService, ['Timer']);

export default box;