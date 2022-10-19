import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Modal, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TimerScreenRouteProps } from '../types/interfaces';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions';


const TimerScreen = () => {
    // const route = useRoute < TimerScreenRouteProps > ();
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todosReducer);
    console.log('todos', todos)

    const todo_now = [{
        name: 'me', date: new Date, status: true
    }]

    return (
        <SafeAreaView style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title={'click'} onPress={() => dispatch(actions.todosActions.addTodo(todo_now))} />
        </SafeAreaView>
    )
}

export default TimerScreen;