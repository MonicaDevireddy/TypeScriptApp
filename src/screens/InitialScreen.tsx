import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Modal } from 'react-native';
import EventRenderItem from '../components/EventRenderItem';
import { Event, EventsScreenNavigationProps, EventsScreenProps } from '../types/interfaces';
import PlusIcon from '../components/PlusIcon';
import AddEventModal from '../components/AddEventModal';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcon } from '../components/Icon';


// const EventsScreen = ({ navigation }: EventsScreenProps): JSX.Element => {
const EventsScreen = (): JSX.Element => {
    const navigation = useNavigation<EventsScreenNavigationProps>()

    const [eventsList, setEventsList] = useState<Event[]>([{"date": "15-10-2022", "name": "Hut", "status": true, "time": "5:48 PM"}]);
    const [modal, setModal] = useState<boolean>(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null)

    console.log('eve',eventsList)

    const gotoTimer = (item: Event) => {
        navigation.navigate('TimerScreen', { date: item.date, time: item.time })
    }

    const editEvent = (item: Event) => {
        setCurrentEvent(item)
        setModal(!modal);
    }

    const deleteEvent = (item: Event) => {
        const updatedEvents = eventsList.filter((event) => { return event != item });
        setEventsList(updatedEvents);
    }



    const renderItem = ({ item }: any) => {
        return (
            <EventRenderItem name={item.name} date={item.date} time={item.time} onClick={() => gotoTimer(item)} onHold={() => editEvent(item)} onDelete={() => deleteEvent(item)} />
        )
    }

    const updateEventsList = (name: string, date: string, time: string) => {
        if (currentEvent != null) {
            var updatedEventList = [...eventsList];
            updatedEventList[updatedEventList.indexOf(currentEvent)] = { name: name, date: date, time: time, status: true };
            setEventsList(updatedEventList);
            setCurrentEvent(null)
        }
        else {
            setEventsList([...eventsList, { name: name, date: date, time: time, status: true }])
        }
        setModal(!modal);
    }

    //deleteEvent
    //modifyEvent
    //OpenEvent

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
                        <MaterialIcon size="large" color="purple" name="home" />

            <AddEventModal save={(name, date, time) => { updateEventsList(name, date, time) }} cancel={() => setModal(!modal)} visible={modal} event={currentEvent} />
            <FlatList
                data={eventsList}
                keyExtractor={(item, index) => index.toLocaleString()}
                renderItem={renderItem}
            />
            <PlusIcon onClick={() => setModal(!modal)} />
        </SafeAreaView>
    )
}

export default EventsScreen;