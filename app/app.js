import React from 'react'
import {render} from 'react-dom'

import box from './box';

let TimerView1 = box.TimerView1;
let TimerView2 = box.TimerView2;

render(
    <div>
        <TimerView1></TimerView1>
        <TimerView2></TimerView2>
    </div>
    , document.getElementById('app'));