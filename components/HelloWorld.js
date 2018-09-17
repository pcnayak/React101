import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorld extends Component {
    render(){
        let greeting = "Hello React. My name is PC Nayak";
        return (
            <Text>{ greeting }</Text>
        );
    }
}