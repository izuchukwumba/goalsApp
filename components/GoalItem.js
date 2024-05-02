import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  //   function deleteGoalHandler_goal() {
  //     // props.onDeleteGoal(props.itemData);
  //   }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteGoal.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    borderRadius: 10,
    color: "white",
  },
  pressedItem: {
    opacity: 0.4,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});
