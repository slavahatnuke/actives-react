import React from 'react'
import {Box} from 'actives';
import connect from '../index';

import TimerView1 from './TimerView1';
import TimerView2 from './TimerView2';

import TimerBox from './TimerBox';

let box = new Box;

box.add('TimerBox', TimerBox);
box.add('TimerBox2', TimerBox.create());

box.connect('TimerState', {Timer: 'TimerBox/Timer', TimerService: 'TimerBox/TimerService'})
    .state(({Timer, TimerService}) => {
        return {
            time: Timer.get(),
            working: TimerService.isWorking()
        };
    })
    .actions(({Timer, TimerService}) => {
        return {
            onUp: () => Timer.up(),
            onDown: () => Timer.down(),
            toggle: () =>  TimerService.toggle()
        };
    });

box.connect('TimerState2', {Timer: 'TimerBox2/Timer', TimerService: 'TimerBox2/TimerService'})
    .state(({Timer, TimerService}) => {
        return {
            time: Timer.get(),
            working: TimerService.isWorking()
        };
    })
    .actions(({Timer, TimerService}) => {
        return {
            onUp: () => Timer.up(),
            onDown: () => Timer.down(),
            toggle: () =>  TimerService.toggle()
        };
    });

box.add('TimerView1', ({TimerState}) => {
    return connect(TimerState)(TimerView1);
});

box.add('TimerView2', ({TimerState}) => {
    return connect(TimerState)(TimerView2);
});

box.add('TimerView3', ({TimerState2}) => {
    return connect(TimerState2)(TimerView2);
});

export default box;