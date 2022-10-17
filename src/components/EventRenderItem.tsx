import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import getTime from '../utils.js/getTime';
import CalendarIcon from './CalendarIcon';
import DeleteIcon from './DeleteIcon';
import { styles } from './styles';
import TimerIcon from './TimerIcon';

interface Props {
    name: string,
    date: Date,
    onClick: () => void,
    onHold: () => void,
    onDelete: () => void,
}

const EventRenderItem = (props: Props): JSX.Element => {
    return (
        <Pressable style={styles.card} onPress={props.onClick} onLongPress={props.onHold}>
            <View style={styles.none}>
                <Text style={styles.nameText}>{props.name}</Text>
                <View style={styles.dateTimeContainer}>
                    <CalendarIcon />
                    <Text style={styles.dateText}>{props.date.toDateString()}</Text>
                    <TimerIcon />
                    <Text style={styles.dateText}>{getTime(props.date)}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={props.onDelete} style={styles.deleteIcon}>
                <DeleteIcon />
            </TouchableOpacity>
        </Pressable>
    )
}

export default EventRenderItem;