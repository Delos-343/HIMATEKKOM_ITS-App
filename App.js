import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RadioPlayer from './screens/RadioPlayer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RadioPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
