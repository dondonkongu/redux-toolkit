import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Userlist from './src/screens/Userlist';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Userlist />

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
