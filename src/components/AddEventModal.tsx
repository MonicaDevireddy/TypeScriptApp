import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

interface Props {
    onClick: (name: string) => void,
    visible: boolean
}

const AddEventModal: React.FC<Props> = (props) => {
    const [name, setName] = useState<string>('');
    // const [date, setDate]

    const submit = () => {
        props.onClick(name);
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
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder='event name'
                        style={styles.nameInput}
                    />
                    <Button title='add' onPress={submit} />
                </View>
            </View>
        </Modal>
    )
}

export default AddEventModal;