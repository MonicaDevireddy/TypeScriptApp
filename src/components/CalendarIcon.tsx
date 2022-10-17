import React from 'react';
import Calendar from '../assets/svg/calendar.svg'
import { widthDp } from '../globalConstants/dimensions';
import { styles } from './styles';


const CalendarIcon: React.FC = () => {
    return (
        <Calendar width={widthDp(7)} height={widthDp(7)} />
    )
}

export default CalendarIcon;