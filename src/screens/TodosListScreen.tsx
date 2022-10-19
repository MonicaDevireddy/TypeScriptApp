import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import EventRenderItem from '../components/EventRenderItem';
import { Todo, TodosListScreenNavigationProps, TodosListScreenProps } from '../types/interfaces';
import PlusIcon from '../components/PlusIcon';
import AddEventModal from '../components/AddEventModal';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import addTodo from '../redux/actions/todosActions';

const TodosListScreen = (): JSX.Element => {
    const navigation = useNavigation<TodosListScreenNavigationProps>()

    const [todoList, setTodoList] = useState<Todo[]>([{ "date": new Date(), "name": "Hut", "description": '' }]);
    const [modal, setModal] = useState<boolean>(false);
    const [currentEvent, setCurrentEvent] = useState<Todo | null>(null);

    // const dispatch = useDispatch();
    // const [todos] = useSelector<any>(state => state);

    const gotoTimer = (todo: Todo) => {
        navigation.navigate('TimerScreen', { todo: todo })
    }

    const editTodo = (todo: Todo) => {
        setCurrentEvent(todo)
        setModal(!modal);
    }

    const deleteTodo = (todo: Todo) => {
        const updatedTodoList = todoList.filter((deletedTodo) => { return todo != deletedTodo });
        setTodoList(updatedTodoList);
    }

    const updateTodoList = (todo: Todo) => {
        if (currentEvent != null) {
            var updatedTodoList = [...todoList];
            updatedTodoList[updatedTodoList.indexOf(currentEvent)] = { name: todo.name, date: todo.date, description: 'true' };
            setTodoList(updatedTodoList);
            setCurrentEvent(null)
        }
        else {
            setTodoList([...todoList, { name: todo.name, date: todo.date, description: '' }])
        }
        setModal(!modal);
    }

    const renderItem = ({ item }: any) => {
        return (
            <EventRenderItem name={item.name} date={item.date} onClick={() => gotoTimer(item)} onHold={() => editTodo(item)} onDelete={() => deleteTodo(item)} />
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
            <AddEventModal save={(item) => { updateTodoList(item) }} cancel={() => setModal(!modal)} visible={modal} event={currentEvent} />
            <FlatList
                data={todoList}
                keyExtractor={(item, index) => index.toLocaleString()}
                renderItem={renderItem}
            />
            <PlusIcon onClick={() => setModal(!modal)} />
        </SafeAreaView>
    )
}

export default TodosListScreen;