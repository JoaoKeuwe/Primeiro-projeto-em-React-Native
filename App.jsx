import React, {useState,useEffect } from 'react'
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated
} from 'react-native';

export default function App() {
  // const [offset] = useState(new Animated.ValueXY({X: 0, y:80}));
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
          source={require('./src/assets/logo.png')}
        />
      </View>

      <Animated.View style={styles.container}>
        <TextInput 
        style={styles.input}
         placeholder="Email"
         autoComplete={false}
         autoCorrect={false}
         onChangeText={() => {}}
       />
        <TextInput 
        style={styles.input}
         placeholder="Senha"
         secureTextEntry={true}
         textContentType={'password'}
         autoCorrect={false}
         onChangeText={() => {}}
       />
     

      <TouchableOpacity style={styles.buttonAccess}>
        <Text style={styles.accesText}> Acessar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAcount}>
        <Text style={styles.registerText}> Criar conta gratuita </Text>
      </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  containerLogo: {
    flex: 1,
    marginBottom: -50,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    width:' 90%',
    paddingBottom: 20
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    borderWidth: 3,
    borderColor: "#03BB85",
    height: 40,
    marginBottom: 15,
    collor: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  buttonAccess: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  accesText: {
    color: '#FFF',
    fontSize: 18,
  },
  createAcount: {
    marginTop: 200,
  },
  registerText: {
    color: '#FFF',
  }

});


