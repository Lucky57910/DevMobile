import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as encoding from 'text-encoding';
import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './Component/Navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, Persistor } from './Store/config';

export default function App() {
  return (
    <Provider store={Store}>
          <PersistGate loading={null} persistor={Persistor}>
              <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={eva.light}>
                  <NavigationContainer>
                      <RootStack />
                      <StatusBar style="auto" />
                  </NavigationContainer>
              </ApplicationProvider>
          </PersistGate>
    </Provider>
  );
}
