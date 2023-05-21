import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import StepIndicator from "react-native-step-indicator";
import tw from "twrnc";
import { selectProgressStage } from "../slices/navSlice";
import { useSelector } from "react-redux";

const labels = ["Waypoints", "Food Stops", "Create Route"];

const indicatorStyle = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: "#4aae4f",
  separatorUnFinishedColor: "#a4d4a5",
  stepIndicatorFinishedColor: "#4aae4f",
  stepIndicatorUnFinishedColor: "#a4d4a5",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#666666",
  labelSize: 12,
  currentStepLabelColor: "#4aae4f",
};

const ProgressDisplay = () => {
  const progressState = useSelector(selectProgressStage);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={indicatorStyle}
          currentPosition={progressState}
          stepCount={3}
          labels={labels}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProgressDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderBottomColor: "rgb(209 213 219)",
    borderBottomWidth: 1,
    borderTopColor: "rgb(209 213 219)",
    borderTopWidth: 1,
  },
  stepIndicator: {
    marginVertical: 20,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stepLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#999999",
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#4aae4f",
  },
});
