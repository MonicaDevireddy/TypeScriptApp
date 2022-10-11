import React from 'react';
import { View, Text } from 'react-native'
import { Event } from '../globalConstants/interfaces';

const EventRenderItem: React.FC<Event> = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.date.toString()}</Text>
        </View>
    )
}

export default EventRenderItem;