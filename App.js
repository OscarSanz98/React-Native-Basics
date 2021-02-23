import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View , Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //inside the [] describes functions that are available for that state and how you can use it
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = goalTitle  => {
    //this gives guarantees that you get the current/latest elements, before performing the state change.
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]); //this takes an array and pulls all the elements from that array and add it to a new one. And then you can add any new elements
    setAddMode(false);
  };


  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelButtonHandler = () => {
    setAddMode(false);
  };

  return (
    //Start with all the views and then add the objects.
    //in the {} you can have the key value pairs 
    <View style={styles.general}>
      <Button title="Add new Goal" onPress= {() => setAddMode(true)}/>
      {/* onAddGoal allows us to pass a method to the GoalInput file so that it can execute it. */}
      <GoalInput visible={addMode} onAddGoal={addGoalHandler} onCancel={cancelButtonHandler}/> 
    {/* render item takes a function which is called for every element in an array */}
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>} 
      />
    </View>
  );
}

// styles is used to format the page
// this allows you to apply a style to multiple components
// code-reuse and code-efficient
// using a stylesheet adds validation and potential performance improvements
const styles = StyleSheet.create({
  
  general: {
    padding: 30,
    marginTop: 20
  },

});
