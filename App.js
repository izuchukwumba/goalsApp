import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler_app(param) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: param, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler_app(goalId) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.id !== goalId);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a06545"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          showModal={modalIsVisible}
          onAddGoal={addGoalHandler_app}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goals}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler_app}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15,
    backgroundColor: "#1e0858",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goals: {
    flex: 5,
    color: "red",
    flexDirection: "column",
  },
});
