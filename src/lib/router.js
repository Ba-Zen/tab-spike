import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../pages/home';
import Second from '../pages/home/second';
import Third from '../pages/home/third';

const AppNavigator = createMaterialTopTabNavigator({
  Campaigns: HomeScreen,
  Details: Second
});

export default AppNavigator;
