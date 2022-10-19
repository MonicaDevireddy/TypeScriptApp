import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker'
import BellIcon from './BellIcon';

import { styles } from './styles';
import TimerIcon from './TimerIcon';
import { Event } from '../types/interfaces'
import CalendarIcon from './CalendarIcon';
import getTime from '../utils.js/getTime';

interface Props {
    save: ({}: Event) => void,
    cancel: () => void,
    event: Event | null,
    visible: boolean
}

const AddEventModal = (props: Props): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());
    const [calendar, setCalendar] = useState<boolean>(false)

    useEffect(() => {
        if (props.event !== null) {
            setName(props.event.name);
            setDate(props.event.date);
        }
        else {
            setName('');
            setDate(new Date());
        }
    }, [props.visible]);

    const submit = () => {
        let event = {
            name: name,
            date: date,
            status: true
        }
        props.save(event);
        setName('');
    }

    const cancel = () => {
        // const [day,month, year] = date.split('-');
        props.cancel();
        setName('');
    }

    const showCalendar = () => {
        setCalendar(!calendar)
    }

    const setDateTime = (dateTime: Date) => {
        setDate(dateTime);
        showCalendar();
    }

    return (
        <Modal
            visible={props.visible}
            animationType={'slide'}
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Set ToDo</Text>

                    <View style={styles.row}>
                        <BellIcon />
                        <View style={styles.nameInput}>
                            <TextInput
                                value={name}
                                onChangeText={setName}
                                placeholder='event name'
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => showCalendar()} style={styles.row}>
                        <CalendarIcon />
                        <Text style={styles.dateInput}>{date.toDateString()}</Text>
                        <TimerIcon />
                        <Text style={styles.dateInput}>{getTime(date)}</Text>
                    </TouchableOpacity>

                    <DatePicker
                        modal
                        open={calendar}
                        date={date}
                        onConfirm={(dateTime: Date) => setDateTime(dateTime)}
                        onCancel={() => {
                            showCalendar()
                        }}
                    />
                    <View style={styles.buttonStyles}>
                        <Button title='cancel' onPress={cancel} />
                        <Button title='save' onPress={submit} disabled={name.trim() == '' ? true : false} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AddEventModal;