import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Plus from '../assets/svg/Plus.svg'
import colors from '../globalConstants/colors';
import { widthDp } from '../globalConstants/dimensions';
import { styles } from './styles';

interface Props{
    onClick: ()=>void
}

const PlusIcon: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.plusIcon} onPress={props.onClick}>
            <Plus width={widthDp(8)} height={widthDp(8)} fill={colors.white} />
        </TouchableOpacity>
    )
}

export default PlusIcon;