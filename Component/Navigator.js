import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@ui-kitten/components';
import { Image } from 'react-native';

import Home from './Home';
import DeuxiemePage from './DeuxiemePage';
import Favoris from './Favoris';

import Assets from '../Definition/Assets';

const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

function searchStackScreens() {
  return (
    <SearchNavigation.Navigator
      initialRouteName="Home"
    >
      <SearchNavigation.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <SearchNavigation.Screen
        name="DeuxiemePage"
        component={DeuxiemePage}
        options={{ title: 'DeuxiemePage' }}
      />
    </SearchNavigation.Navigator>
  )
};

function favStackScreens() {
  return (
    <FavNavigation.Navigator
      initialRouteName="Favoris"
    >
      <FavNavigation.Screen
        name="Favoris"
        component={Favoris}
        options={{ title: 'Favoris' }}
      />
      <FavNavigation.Screen
        name="DeuxiemePage"
        component={DeuxiemePage}
        options={{ title: 'DeuxiemePage' }}
      />
    </FavNavigation.Navigator>
  )
};

function RootStack() {
  const theme = useTheme();
  return (
    <TabNavigation.Navigator
      tabBarOptions={{
        activeTintColor: theme['color-primary-default'],
      }}>
      <TabNavigation.Screen
        name="Home"
        component={searchStackScreens}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Image source={Assets.images.search} style={{ tintColor: color }} />;
          }
        })}
      />
      <TabNavigation.Screen
        name="Favoris"
        component={favStackScreens}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Image source={Assets.images.fav} style={{ tintColor: color }} />;
          }
        })}
      />
    </TabNavigation.Navigator>
  );
}

export default RootStack;