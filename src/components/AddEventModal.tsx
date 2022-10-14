import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { widthDp } from '../globalConstants/dimensions';
import BellIcon from './BellIcon';

import { styles } from './styles';
import TimerIcon from './TimerIcon';

interface Props {
    onClick: (name: string, date: Date, time: string) => void,
    visible: boolean
}

const AddEventModal: React.FC<Props> = (props) => {
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');

    const submit = () => {
        const [day,month, year] = date.split('-');
        props.onClick(name, new Date(+year, +month - 1, +day), time);
        setName('')
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
                        />
                        <DatePicker
                            style={styles.datePicker}
                            date={time}
                            mode="time"
                            placeholder="select time"
                            format="LTS"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            // is24Hour={true}
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
                        <Button title='save' onPress={submit} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AddEventModal;