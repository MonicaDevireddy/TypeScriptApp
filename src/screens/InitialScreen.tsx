import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import EventRenderItem from '../components/EventRenderItem';
import { Event, EventsScreenNavigationProps, EventsScreenProps } from '../types/interfaces';
import PlusIcon from '../components/PlusIcon';
import AddEventModal from '../components/AddEventModal';
import { useNavigation } from '@react-navigation/native';

const EventsScreen = (): JSX.Element => {
    const navigation = useNavigation<EventsScreenNavigationProps>()

    const [eventsList, setEventsList] = useState<Event[]>([{ "date": new Date(), "name": "Hut", "status": true }]);
    const [modal, setModal] = useState<boolean>(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null)

    const gotoTimer = (item: Event) => {
        navigation.navigate('TimerScreen', { date: item.date })
    }

    const editEvent = (item: Event) => {
        setCurrentEvent(item)
        setModal(!modal);
    }

    const deleteEvent = (item: Event) => {
        const updatedEvents = eventsList.filter((event) => { return event != item });
        setEventsList(updatedEvents);
    }

    const updateEventsList = (name: string, date: Date) => {
        if (currentEvent != null) {
            var updatedEventList = [...eventsList];
            updatedEventList[updatedEventList.indexOf(currentEvent)] = { name: name, date: date, status: true };
            setEventsList(updatedEventList);
            setCurrentEvent(null)
        }
        else {
            setEventsList([...eventsList, { name: name, date: date, status: true }])
        }
        setModal(!modal);
    }

    const renderItem = ({ item }: any) => {
        return (
            <EventRenderItem name={item.name} date={item.date} onClick={() => gotoTimer(item)} onHold={() => editEvent(item)} onDelete={() => deleteEvent(item)} />
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
            <AddEventModal save={(name, date) => { updateEventsList(name, date) }} cancel={() => setModal(!modal)} visible={modal} event={currentEvent} />
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