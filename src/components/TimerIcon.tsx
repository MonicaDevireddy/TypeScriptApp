import React from 'react';
import Timer from '../assets/svg/timer.svg'
import { widthDp } from '../globalConstants/dimensions';


const TimerIcon: React.FC = () => {
    return (
        <Timer width={widthDp(5)} height={widthDp(5)} />
    )
}

export default TimerIcon;