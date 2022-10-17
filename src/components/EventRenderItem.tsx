import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import CalendarIcon from './CalendarIcon';
import DeleteIcon from './DeleteIcon';
import { styles } from './styles';
import TimerIcon from './TimerIcon';

interface Props {
    name: string,
    date: Date,
    time: string,
    onClick: () => void,
    onHold: () => void,
    onDelete: () => void,
}

const EventRenderItem = (props: Props): JSX.Element => {
    return (
        <Pressable style={styles.card} onPress={props.onClick} onLongPress={props.onHold}>
            <View>
                <Text style={styles.nameText}>{props.name}</Text>
                <View style={styles.dateTimeContainer}>
                    <CalendarIcon />
                    <Text style={styles.dateText}>{props.date.toString()}</Text>
                    <TimerIcon />
                    <Text style={styles.dateText}>{props.time}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={props.onDelete} style={styles.deleteIcon}>
                <DeleteIcon />
            </TouchableOpacity>
        </Pressable>
    )
}

export default EventRenderItem;