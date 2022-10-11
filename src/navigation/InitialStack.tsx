import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from '../screens/InitialScreen';

const Stack = createNativeStackNavigator();

const InitialStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
        </Stack.Navigator>
    );
}

export default InitialStack;