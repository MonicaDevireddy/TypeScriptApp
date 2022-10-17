import React from 'react';
import Delete from '../assets/svg/delete.svg'
import { widthDp } from '../globalConstants/dimensions';
import { styles } from './styles';


const DeleteIcon: React.FC = () => {
    return (
            <Delete width={widthDp(10)} height={widthDp(10)}/>
    )
}

export default DeleteIcon;