import React from 'react';
import Timer from '../assets/svg/timer.svg'
import { widthDp } from '../globalConstants/dimensions';


const TimerIcon: React.FC = () => {
    return (
        <Timer width={widthDp(8)} height={widthDp(8)} />
    )
}

export default TimerIcon;