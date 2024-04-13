import React from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView } from 'react-native';
import primeiraguerra from '../assets/primeira-guerra.jpeg';

export default function ConteudoPrimeiraGuerra({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Primeira Guerra Mundial</Text>
        <Image source={primeiraguerra} style={styles.image} />

        <Text style={styles.paragraph}>
          A Primeira Guerra Mundial foi um conflito militar global que ocorreu entre 1914 e 1918. Ela envolveu a maioria das nações do mundo, incluindo todas as grandes potências, organizadas em duas alianças militares opostas: os Aliados e as Potências Centrais.
        </Text>
        <Text style={styles.paragraph}>
          As causas da Primeira Guerra Mundial incluem rivalidades territoriais e imperialistas entre as grandes potências europeias, alianças militares secretas, nacionalismo exacerbado, disputas econômicas e crises diplomáticas.
        </Text>
        <Text style={styles.paragraph}>
          A guerra resultou em grande perda de vidas e devastação econômica. As batalhas foram travadas principalmente nas trincheiras ao longo da Frente Ocidental, mas também ocorreram em outros lugares, como a Frente Oriental, os Bálcãs, o Oriente Médio e os mares.
        </Text>
        <Text style={styles.paragraph}>
          A Primeira Guerra Mundial foi um dos conflitos mais significativos da história, pois alterou dramaticamente o mapa político da Europa, acabou com impérios, introduziu novas tecnologias de guerra e abriu caminho para o surgimento da Segunda Guerra Mundial duas décadas depois.
        </Text>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="#8B4513"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B4513',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  },
});
