import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,
          TouchableOpacity} from 'react-native';
import {createStore} from "redux";
import { Provider } from 'react-redux';
import CounterComponent from './components/CounterComponent';

const initialState = {
  counter:0,
}

const reducer = (state = initialState,action:any) => {
    switch(action.type){
      case 'INCREASE_COUNTER':
        return {counter: state.counter + 1};
      case 'DECREASE_COUNTER':
        return {counter: state.counter - 1};
      default:
        return state;
    }
}

const myStore = createStore(reducer);

export default function App() {
  return (
    <Provider store={myStore}>
      <CounterComponent/>
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
