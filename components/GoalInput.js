import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    //inside the [] describes functions that are available for that state and how you can use it
    const [enteredGoal, setEnteredGoal] = useState('');

    //update what user entered on keystroke and store it
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            {/* justify content allows you to style the row objects, flexdirection is column by default  */}
            {/* justifcontent is along the main axis, and alignitmes is along the cross-axis. In this case alignitems is top to bottom, justify is left to right  */}
            <View style={styles.container}>
                <TextInput 
                placeholder = "Course Goal" 
                style={styles.input}
                onChangeText={goalInputHandler} //you dont add () brackets, so that it executes the function on every keystroke
                value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    {/* bind allows us to pre-configure some parameters to pass to the method */}
                    <View style={styles.buttons}>
                        <Button title = "ADD" onPress={addGoalHandler}/> 
                    </View>
                    <View>
                        {/* props.onCancel calls the onCancel function in App.js */}
                        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                    </View>
                     
                </View>
            </View>
        </Modal>
    
    );
};

const styles = StyleSheet.create({
    container: { 
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    },
    input: {
        width: 300, 
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10, 
        textAlign: 'left',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300
    },
    buttons: {
        width: '40%'
    }
});

export default GoalInput;