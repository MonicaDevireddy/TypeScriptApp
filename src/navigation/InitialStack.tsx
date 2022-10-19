import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/interfaces';
import screens from '../screens';


const Stack = createNativeStackNavigator<RootStackParamList>();

const InitialStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TodosListScreen" component={screens.TodosListScreen} />
            <Stack.Screen name="TimerScreen" component={screens.TimerScreen} />
        </Stack.Navigator>
    );
}

export default InitialStack;