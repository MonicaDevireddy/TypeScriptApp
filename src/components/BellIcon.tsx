import React from 'react';
import Bell from '../assets/svg/bell.svg'
import { widthDp } from '../globalConstants/dimensions';
import { styles } from './styles';


const BellIcon: React.FC = () => {
    return (
            <Bell width={widthDp(7)} height={widthDp(7)} />
    )
}

export default BellIcon;