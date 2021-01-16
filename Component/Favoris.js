import React, { useState, useEffect } from 'react';
import { Text, Input, Button, Layout } from '@ui-kitten/components';
import { Platform, Alert, StyleSheet, Image, ImageBackground, View } from 'react-native';
import * as Location from 'expo-location';

import Assets from '../Definition/Assets';

const Favoris = ({ route, navigation }) => {

    return (
        <Layout style={styles.container}>
            <Text>Favoris</Text>
        </Layout>
    );
};

export default Favoris;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});