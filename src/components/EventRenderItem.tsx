import React from 'react';
import { View, Text, Pressable } from 'react-native'
import { Event } from '../globalConstants/interfaces';
import { styles } from './styles';

interface Props {
    name: string,
    date: Date,
    time: string,
    onClick: () => void,
    onHold: () => void
}

const EventRenderItem: React.FC<Props> = (props) => {
    return (
        <Pressable style={styles.row} onPress={props.onClick} onLongPress={props.onHold}>
            <Text>{props.name}</Text>
            <Text>{props.date.toString()}</Text>
            <Text>{props.time}</Text>
        </Pressable>
    )
}

export default EventRenderItem;