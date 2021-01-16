import React, { useState, useEffect } from 'react';
import { Text, Input, Button, Layout } from '@ui-kitten/components';
import { Platform, Alert, StyleSheet, Image, ImageBackground, View, FlatList, Keyboard } from 'react-native';
import * as Location from 'expo-location';

import Assets from '../Definition/Assets';
import { tendance, filmSearch, credit, rechercheFilmDB } from '../API/MovieDB';
import FilmItem from './filmItem';

const Home = ({ route, navigation }) => {

    const [searchSearch, setSearchSearch] = useState('');
    const [films, setFilms] = useState(null);
    let page = 1;
    let recherPerso = false;

    const request = async (prevFilms, pageF) => {
        try {
            const Result = await tendance(pageF);
            setFilms([...prevFilms, ...Result.results]);
            recherPerso = false;
        }catch (error) {

        }
    }

    const rechercheFilm = async (prevFilms, pageF) => {
        try {
            const Result = await rechercheFilmDB(pageF, searchSearch);
            setFilms([...prevFilms, ...Result.results]);
            setFilms(Result.results);
            recherPerso = true;
        }catch (error) {

        }
    }

    const pressOnSearch = async () => {
        page=1;
        Keyboard.dismiss();
        rechercheFilm([], page);
    }
    const pressOnTendance = async () => {
        page=1;
        Keyboard.dismiss();
        request([], page);
    }

    const suite = async () => {
        page++;
        try {
            if(recherPerso){
                rechercheFilm(films, page);
            }else{
                request(films, page);
            }
        }catch (error) {

        }
    }

    const nextPage = async (film) => {
      try {
          const Result = await filmSearch(film.id);
          const ResultCred = await credit(film.id);
          setFilms(Result.results);
          navigation.navigate('DeuxiemePage', {
              film: Result,
              credit: ResultCred,
          });
      }catch (error) {
      }
    };

    const searchPremierFilm = () => {
        Keyboard.dismiss();
    }

    if(films == null){
        request([], 1);
    }

    return (
        <Layout style={styles.container}>
            <Input
              placeholder='Film...'
              onChangeText={(text) => setSearchSearch(text)}
              onSubmitEditing={pressOnSearch}></Input>
            <Button onPress={pressOnSearch} title='Rechercher' >Rechercher</Button>
            <Button status='success' onPress={pressOnTendance} title='Tendance' >Tendance</Button>
            <Layout style={styles.liste}>
              <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <FilmItem
                  onClic={nextPage}
                  film={item} />
                )}
                onEndReached={suite}
                onEndReachedThreshold={0.5}
              />
            </Layout>
        </Layout>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    liste: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
});

