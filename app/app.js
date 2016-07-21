import React from 'react'
import {render} from 'react-dom'

import box from './box';

let TimerView1 = box.TimerView1;
let TimerView2 = box.TimerView2;
let TimerView3 = box.TimerView3;

render(
    <div>
        <TimerView1></TimerView1>
        <TimerView2></TimerView2>
        <TimerView3 name="3 isolated"></TimerView3>
    </div>
    , document.getElementById('app'));