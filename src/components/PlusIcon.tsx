import React from 'react';
import { View } from 'react-native';
import Plus from '../assets/svg/Plus.svg'
import colors from '../globalConstants/colors';
import { widthDp } from '../globalConstants/dimensions';
import { styles } from './styles';

const PlusIcon: React.FC = () => {
    return (
        <View style={styles.plusIcon}>
            <Plus width={widthDp(8)} height={widthDp(8)} fill={colors.white} />
        </View>
    )
}

export default PlusIcon;