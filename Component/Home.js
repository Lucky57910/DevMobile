import React, { useState, useEffect } from 'react';
import { Text, Input, Button, Layout } from '@ui-kitten/components';
import { Platform, Alert, StyleSheet, Image, ImageBackground, View } from 'react-native';
import * as Location from 'expo-location';

import Assets from '../Definition/Assets';

const Home = ({ route, navigation }) => {

    nextPage = async () => {
        navigation.navigate('DeuxiemePage', {});
    };

    return (
        <Layout style={styles.container}>
            <Button onPress={nextPage} title='Rechercher' >Rechercher</Button>
        </Layout>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});