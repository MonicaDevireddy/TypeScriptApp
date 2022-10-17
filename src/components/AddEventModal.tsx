import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import BellIcon from './BellIcon';

import { styles } from './styles';
import TimerIcon from './TimerIcon';
import { Event } from '../types/interfaces'
import CalendarIcon from './CalendarIcon';

interface Props {
    save: (name: string, date: string, time: string) => void,
    cancel: () => void,
    event: Event | null,
    visible: boolean
}

const AddEventModal = (props: Props): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        if (props.event !== null) {
            setName(props.event.name);
            setDate(props.event.date);
            setTime(props.event.time);
        }
        else {
            setName('');
            setDate('');
            setTime('');
        }
    }, [props.visible]);

    const submit = () => {
        // const [day,month, year] = date.split('-');
        props.save(name, date, time);
        setName('');
    }

    const cancel = () => {
        // const [day,month, year] = date.split('-');
        props.cancel();
    }

    return (
        <Modal
            visible={props.visible}
            animationType={'slide'}
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Set Timer</Text>
                    <View style={styles.nameContainer}>
                        <View style={styles.bellIcon}>
                            <BellIcon />
                        </View>
                        <View style={styles.nameInput}>
                            <TextInput
                                value={name}
                                onChangeText={setName}
                                placeholder='event name'
                            />
                        </View>
                    </View>
                    <View style={styles.pickerRow}>
                        <DatePicker
                            style={styles.datePicker}
                            date={date}
                            mode="date"
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate="01-06-2016"
                            maxDate="01-06-3016"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    ...styles.dateIcon
                                },
                                dateInput: {
                                    ...styles.dateInput
                                }
                            }}
                            onDateChange={(date: any) => setDate(date)}
                            // getDateStr={(date: any)=>{console.log('date is',date); let curr =  new Date(date); return curr.toString()}}
                            iconComponent={<View style={styles.timerIcon}>
                                <CalendarIcon />
                            </View>}
                        />
                        <DatePicker
                            style={styles.datePicker}
                            date={time}
                            mode="time"
                            placeholder="select time"
                            format="LT"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateInput: {
                                    ...styles.dateInput
                                },
                            }}
                            onDateChange={(time: any) => setTime(time)}
                            iconComponent={<View style={styles.timerIcon}>
                                <TimerIcon />
                            </View>}
                        />
                    </View>
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