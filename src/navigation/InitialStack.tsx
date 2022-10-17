import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from '../screens/InitialScreen';
import TimerScreen from '../screens/TimerScreen';
import { RootStackParamList } from '../types/interfaces';



const Stack = createNativeStackNavigator<RootStackParamList>();

const InitialStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EventsScreen" component={InitialScreen} />
            <Stack.Screen name="TimerScreen" component={TimerScreen} />
        </Stack.Navigator>
    );
}

export default InitialStack;