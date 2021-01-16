import React, { useState, useEffect } from 'react';
import { Text, Input, Button, Layout, Divider, List, ListItem } from '@ui-kitten/components';
import { Platform, Alert, StyleSheet, Image, ImageBackground, View, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { connect } from 'react-redux';

import Assets from '../Definition/Assets';

const DeuxiemePage = ({ route, navigation, favFilm, dispatch }) => {

    const { film } = route.params;
    const { credit } = route.params;
    let genre = "";
    for(let i =0; i<film.genres.length; i++){
        if(i<(film.genres.length-1)){
            genre = genre + film.genres[i].name + ", ";
        }else{
            genre = genre + film.genres[i].name;
        }
    }
    const renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.name}`}
          description={`${item.character}`}
        />
    );

    const saveFilm = async () => {
        const action = { type: 'SAVE_FILM', value: film.id };
        dispatch(action);
      }

      const unsaveFilm = async () => {
        const action = { type: 'UNSAVE_FILM', value: film.id };
        dispatch(action);
      }

    const displaySaveFilm = () => {
    console.log(favFilm)

        if (favFilm.findIndex(i => i === film.id) !== -1) {
          // Le restaurant est sauvegardé
          return (
            <Button
              title='Retirer des déjà vu'
              onPress={unsaveFilm}
            >Unsave</Button>
          );
        }
        // Le restaurant n'est pas sauvegardé
        return (
          <Button
            title='Ajouter aux déjà vu'
            onPress={saveFilm}
          >Save</Button>
        );
      }

    return (
        <Layout style={styles.Megacontainer}>
            <Layout style={styles.container}>
                <Layout>
                    <Image style={styles.thumbnail} source={{ uri: "https://image.tmdb.org/t/p/w500"+film.backdrop_path }} />
                </Layout>
                <Layout style={styles.containerText}>
                    <Text style={styles.espace} category='h5'>{film.original_title}</Text>
                    <Text style={styles.espace} category='h6'>{film.release_date}</Text>
                    <Text style={styles.espace}>Genre: {genre}</Text>
                    <Text style={styles.espace}>Duree: {film.runtime}</Text>
                </Layout>
            </Layout>
            <Text style={styles.espace}>Resume: </Text>
            <Text style={styles.espace}>{film.overview}</Text>
            {displaySaveFilm()}
            <Text style={styles.espace}>Cast({credit.cast.length}) </Text>
            <List
                style={styles.containerListe}
                data={credit.cast}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />
        </Layout>
    );
};

const mapStateToProps = (state) => {
  return {
    favFilm: state.favFilmID
  }
}

export default connect(mapStateToProps)(DeuxiemePage);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    Megacontainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    containerListe: {
        flex: 1,
    },
    thumbnail: {
        width: 128,
        height: 128,
        borderRadius: 12,
    },
    containerText: {
        flex: 1,
    },
    espace: {
        marginTop: 2,
    }
});