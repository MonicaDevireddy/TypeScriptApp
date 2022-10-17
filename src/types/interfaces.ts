import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RouteProp } from '@react-navigation/native';


export interface Event {
    name: string,
    date: Date,
    status: boolean
}

export type RootStackParamList = {
    EventsScreen: undefined;
    TimerScreen: { date: Date; };
};

export type EventsScreenProps = NativeStackScreenProps<RootStackParamList, 'EventsScreen'>;
export type EventsScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'TimerScreen'>;

export type TimerScreenProps = NativeStackScreenProps<RootStackParamList, 'TimerScreen'>;
export type TimerScreenNavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type TimerScreenRouteProps = RouteProp<RootStackParamList, 'TimerScreen'>;