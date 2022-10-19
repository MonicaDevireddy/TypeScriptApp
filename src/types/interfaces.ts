import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RouteProp } from '@react-navigation/native';


export interface Todo {
    name: string,
    date: Date,
    description: string
}

export type RootStackParamList = {
    TodosListScreen: undefined;
    TimerScreen: { todo: Todo };
};

export type TodosListScreenProps = NativeStackScreenProps<RootStackParamList, 'TodosListScreen'>;
export type TodosListScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'TimerScreen'>;

export type TimerScreenProps = NativeStackScreenProps<RootStackParamList, 'TimerScreen'>;
export type TimerScreenNavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type TimerScreenRouteProps = RouteProp<RootStackParamList, 'TimerScreen'>;