import React from 'react';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './store/store';
import ClickCounter from './components/ClickCounter';
import Home from './home';
import Patterns from './components/patterns';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Click Counter" component={ClickCounter} />
        <Tab.Screen name="Patterns" component={Patterns} />
      </Tab.Navigator>
    </Provider>
  );
}
