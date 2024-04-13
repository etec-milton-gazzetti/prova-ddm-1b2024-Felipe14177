import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Conteudo from './telaconteudo.js';
import { useFonts, Whisper_400Regular } from '@expo-google-fonts/whisper';
import { AppLoading } from 'expo';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primeira Guerra Mundial</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Conteudo")}
      >
        <Text style={styles.buttonText}>Sobre a Guerra</Text>
      </TouchableOpacity>
        
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={styles.buttonText}>Sobre mim</Text>
      </TouchableOpacity>
    </View>
  );
}

function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>
      <Text>Felipe Gonçalves Estebam Silva</Text>
      <Text>3° Info</Text>
      <Text>RM: 07758</Text>
    </View>
  );
}

function Voltar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voltar</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Whisper_400Regular,
  });

if (!fontsLoaded) {
  return <AppLoading />;
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Página Inicial',
            headerStyle: {
              backgroundColor: '#8B4513',
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Voltar"
          component={Voltar}
          options={{
            title: 'Voltar',
            headerStyle: {
              backgroundColor: '#8B4513',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Conteudo"
          component={Conteudo}
          options={{
            title: 'Conteúdo',
            headerStyle: {
              backgroundColor: '#8B4513',
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: 'Sobre mim',
            headerStyle: {
              backgroundColor: '#8B4513',
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
    fontFamily: 'Whisper_400Regular',
    marginBottom: 20,
    color: '#8B4513', 
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
