import React from 'react';
import Timer from '../assets/svg/timer.svg'
import { widthDp } from '../globalConstants/dimensions';


const TimerIcon: React.FC = () => {
    return (
        <Timer width={widthDp(7)} height={widthDp(7)} />
    )
}

export default TimerIcon;