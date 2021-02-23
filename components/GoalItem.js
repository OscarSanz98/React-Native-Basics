import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.3} onPress={props.onDelete.bind(this, props.id)}>
            <View style= {styles.listItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItems: {
        padding: 10, //padding is the spacing between the border and the content
        marginVertical: 10, //margin is the spacing between border and other objects
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        width: 350
    }
});

export default GoalItem;