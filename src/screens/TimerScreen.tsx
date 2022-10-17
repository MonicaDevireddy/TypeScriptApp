import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TimerScreenRouteProps } from '../types/interfaces';
import moment from 'moment';



const TimerScreen = (): JSX.Element => {
    const route = useRoute<TimerScreenRouteProps>();

    return (
        <SafeAreaView style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        </SafeAreaView>
    )
}

export default TimerScreen;