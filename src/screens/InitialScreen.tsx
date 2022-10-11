import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Modal } from 'react-native';
import EventRenderItem from '../components/EventRenderItem';
import { Event } from '../globalConstants/interfaces';
import PlusIcon from '../components/PlusIcon';
import AddEventModal from '../components/AddEventModal';


const InitialScreen: React.FC = () => {
    const [eventsList, setEventsList] = useState<Event[]>([]);
    const [modal, setModal] = useState<boolean>(false)
    console.log('eventlist', eventsList)

    const renderItem = ({ item }: any) => {
        return (
            <EventRenderItem name={item.name} date={item.date} status={item.status} />
        )
    }

    const addEvent = (name: string) => {
        // console.log('mujkl', name);
        setEventsList([...eventsList, { name: name, date: new Date(), status: true }])
        setModal(!modal);
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <AddEventModal onClick={(name) => { addEvent(name) }} visible={modal} />
            <FlatList
                data={eventsList}
                keyExtractor={(item, index) => index.toLocaleString()}
                renderItem={renderItem}
            />
            <PlusIcon onClick={() => setModal(!modal)} />
        </SafeAreaView>
    )
}

export default InitialScreen;