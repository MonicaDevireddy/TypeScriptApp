import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import EventRenderItem from '../components/EventRenderItem';
import { Event } from '../globalConstants/interfaces';
import PlusIcon from '../components/PlusIcon';


const InitialScreen: React.FC = () => {
    const [eventsList, setEventsList] = useState<Event[]>([])

    useEffect(() => {
        setEventsList([{
            name: 'bday',
            date: new Date(),
            status: true
        },
        {
            name: 'dday',
            date: new Date(),
            status: true
        },
        {
            name: 'cday',
            date: new Date(),
            status: true
        }])
    }, [])

    const renderItem = ({ item }: any) => {
        console.log('it', item)
        return (
            <EventRenderItem name={item.name} date={item.date} status={item.status} />
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={eventsList}
                keyExtractor={(item, index) => index.toLocaleString()}
                renderItem={renderItem}
            />
            <PlusIcon />
        </SafeAreaView>
    )
}

export default InitialScreen;