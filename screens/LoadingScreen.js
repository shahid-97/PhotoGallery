import React from "react";
import { StyleSheet, ActivityIndicator} from "react-native";

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
            <ActivityIndicator animating={true} />
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
export default LoadingScreen
