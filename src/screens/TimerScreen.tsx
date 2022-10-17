import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TimerScreenRouteProps } from '../types/interfaces';
import moment from 'moment';



const TimerScreen = (): JSX.Element => {
    const route = useRoute<TimerScreenRouteProps>();
    const { date, time } = route.params;
    var today = new Date();
    console.log('today is', today.toLocaleDateString());
    const [month, day, year] = today.toLocaleDateString().split('/')
    console.log('month:', month, day, year);

    console.log('date is', date);
    const [giveDay, givenMonth, givenYear] = date.split('-');
    console.log('day:', giveDay, givenMonth, givenYear);

    useEffect(() => {
        // calculateYears();
    });

    // const calculateYears = () => { // use memo with dependets year and given year
    //     var years;
    //     if (year != givenYear) {
    //         //calculation in terms of month
    //         if (month < givenMonth) {
    //             years = parseInt(givenYear) - parseInt(year);
    //         }
    //         else {
    //             if (month > givenMonth)
    //                 years = parseInt(givenYear) - parseInt(year) - 1;
    //             else { //same month
    //                 //calculation in terms of days
    //                 if (day < giveDay) {
    //                     years = parseInt(givenYear) - parseInt(year);
    //                 }
    //                 else {
    //                     if (day > giveDay) {
    //                         years = parseInt(givenYear) - parseInt(year) - 1;
    //                     }
    //                     else {//same day
    //                         //check time
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     else { //same year
    //         years = 0;
    //     }
    // }

    // const calculateMonths = () => {
    //     var months;
    //     if (year != givenYear) {
    //         if (month < givenMonth) {
    //             if (day < giveDay) {
    //                 months = parseInt(givenMonth) - parseInt(month)
    //             }
    //             else if (day > giveDay) {
    //                 months = parseInt(givenMonth) - parseInt(month) - 1
    //             }
    //             else {//same day
    //                 //check time
    //             }
    //         }
    //         else if (month > givenMonth) { //month > givenMonth
    //             if (day < giveDay) {
    //                 months = 12 - parseInt(month) + parseInt(givenMonth)
    //             }
    //             else if (day > giveDay) {
    //                 months = 12 - parseInt(month) + parseInt(givenMonth) - 1;
    //             }
    //             else {//same day
    //                 //check time
    //             }
    //         }
    //         else { //same month
    //             months = 0;
    //         }
    //     }
    //     else { //same year => month < givenMonth
    //         if (day < giveDay) {
    //             months = parseInt(givenMonth) - parseInt(month)
    //         }
    //         else if (day > giveDay) {
    //             months = parseInt(givenMonth) - parseInt(month) - 1
    //         }
    //         else {//same day
    //             //check time
    //         }
    //     }
    // }

    // const calculateDays = () => {
    //     var days;

    //     if (month != givenMonth) {
    //         if (day < giveDay) {
    //             getDaysInMonth(parseInt(month), parseInt(year)) - parseInt(day) + giveDay
    //         }
    //         else {//same day
    //             days = 0
    //         }
    //     }
    //     else {//same month
    //         days = parseInt(giveDay) - parseInt(day)
    //     }
    // }

    // const getDaysInMonth = (month: number, year: number) => {
    //     const day30 = [4, 6, 9, 11];
    //     const day31 = [1, 3, 5, 7, 8, 10, 12];
    //     var daysInMonth;
    //     if (day30.includes(month)) {
    //         return 30;
    //     }
    //     else {
    //         if (day31.includes(month))
    //             return 31;
    //         else {
    //             if (year % 4 == 0)
    //                 return 29;
    //             else
    //                 return 28;
    //         }
    //     }
    // }

    return (
        <SafeAreaView style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>{today.toString()}</Text>
        </SafeAreaView>
    )
}

export default TimerScreen;