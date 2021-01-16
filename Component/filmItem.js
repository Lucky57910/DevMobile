import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Layout, Text, useTheme } from '@ui-kitten/components';

import Assets from '../Definition/Assets';

const FilmItem = ({onClic, film = null}) => {

    return (
        <Layout style={styles.container}>
            <TouchableOpacity style={styles.TouchableOpacity}
                  onPress={() => { onClic(film) }}>
                <Layout>
                    <Image style={styles.thumbnail} source={{ uri: "https://image.tmdb.org/t/p/w500"+film.backdrop_path }} />
                </Layout>
                <Layout style={styles.containerText}>
                    <Text category='h5'>{film.original_title}</Text>
                    <Text category='h6'>{film.release_date}</Text>
                    <Text>{film.overview.substr(0, 100)+"..."}</Text>
                </Layout>
            </TouchableOpacity>
        </Layout>
    );
};

export default FilmItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TouchableOpacity: {
        flex: 1,
        flexDirection: 'row',
    },
    thumbnail: {
        width: 128,
        height: 128,
        borderRadius: 12,
    },
    containerText: {
        flex: 1,
    },
});