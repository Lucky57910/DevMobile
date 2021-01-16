import React, { useState, useEffect } from 'react';
import { Text, Input, Button, Layout } from '@ui-kitten/components';
import { Platform, Alert, StyleSheet, Image, ImageBackground, View } from 'react-native';
import * as Location from 'expo-location';

import Assets from '../Definition/Assets';

const DeuxiemePage = ({ route, navigation }) => {

    return (
        <Layout style={styles.container}>
            <Text>Deuxieme Page</Text>
        </Layout>
    );
};

export default DeuxiemePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});