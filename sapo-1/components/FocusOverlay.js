import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { selectFocusMarker } from "../slices/mapFocusSlice";
import { useSelector } from "react-redux";

const FocusOverlay = () => {
  const focusMarker = useSelector(selectFocusMarker);
  return (
    <Text style={{ position: "absolute", bottom: 50 }}>{focusMarker.text}</Text>
  );
};

export default FocusOverlay;

const styles = StyleSheet.create({});
