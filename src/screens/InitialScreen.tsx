import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Modal } from 'react-native';
import EventRenderItem from '../components/EventRenderItem';
import { Event } from '../globalConstants/interfaces';
import PlusIcon from '../components/PlusIcon';
import AddEventModal from '../components/AddEventModal';


const InitialScreen: React.FC = () => {
    const [eventsList, setEventsList] = useState<Event[]>([]);
    const [modal, setModal] = useState<boolean>(false);

    const changeStatus = (item: Event) => {
        const updatedEvents = eventsList.filter((event) => { return event.name == item.name });
        console.log('events are', updatedEvents)
        // setEventsList(updatedEvents)
    }

    const renderItem = ({ item }: any) => {
        return (
            <EventRenderItem name={item.name} date={item.date} time={item.time}onClick={() => changeStatus(item)} onHold={() => console.log('held')} />
        )
    }

    const addEvent = (name: string, date: Date, time: string) => {
        console.log('name is ', name, ';  date is ', date, ';  time is ', time)
        setEventsList([...eventsList, { name: name, date: date, time: time, status: true }])
        setModal(!modal);
    }
    //deleteEvent
    //modifyEvent
    //OpenEvent

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
            <AddEventModal onClick={(name, date, time) => { addEvent(name, date, time) }} visible={modal} />
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