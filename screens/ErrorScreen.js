import React from "react";
import { StyleSheet } from "react-native";

const ErrorScreen = () => {
    return (
        <View style={styles.container}>
          <Text>Failed to load photos!</Text>
        </View>
      )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'black'
    }
  })
export default ErrorScreen
