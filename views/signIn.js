import React, { useState } from 'react';

import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import * as Yup from 'yup';

export default SignIn = ({ navigation }) => {
 
  const defaultLogin = {email: '', password: ''};

  const [ login, setLogin ] = useState(defaultLogin);

  const singInValidationSchema = Yup.object({
    email: Yup.string('Invalid Email') 
      .email('Invalid email')             
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password should be at least 8 characters long')
      .required('Required'),
  })

  /*style={styles.parentContainer}*/

  return (
    <KeyboardAvoidingView
      behaviour='padding'
      style={{ flex:1, alignItems: 'center'}}
      keyboardVerticalOffset={800}
    >
      <SafeAreaView style={{ flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.parentContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>Log In</Text>
                <TextInput
                  style={styles.input}
                  placeholder='email'
                  autoCompleteType='email'
                  autoCapitalize='none'
                  onChangeText={(text) => setLogin({ ...login, email: text })}
                  value={login.text}
                />
                <TextInput
                  style={styles.input}
                  placeholder='password'
                  autoCompleteType='password'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  onChangeText={(text) => setLogin({ ...login, password: text })}
                  value={login.password}
                />
                <TouchableOpacity 
                  style={styles.submit}
                  onPress={async () => {
                    singInValidationSchema.validate(login).then(value => {
                        // check if correct ->
                        const correct = true;
                        console.log(value);
                        setLogin(defaultLogin);  
                        if (correct) navigation.navigate('App');
                        
                    }).catch(err => {
                      alert(err.errors);
                    });
                  }} 
                >
                  <View>
                    <Text style={styles.textSubmit}>SUBMIT</Text>
                  </View>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical: 20}}>
              <Button 
                title='Sign Up!'
                onPress={()=> alert('Signining up!')}
              />
            </View> 
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  container: {
    backgroundColor: 'white',
    height: 280,
    width: 340,
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 30
  },
  input: {
    backgroundColor: '#ededed',
    paddingLeft: 17,
    marginVertical: 10,
    borderRadius: 20,
    height: 45,
    fontSize: 18
  },
  submit: {
    backgroundColor: '#c0ff4a',
    padding: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignContent: 'center'
  },
  textSubmit: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#333333',
    fontWeight: '700',
    height: 25,
    fontSize: 24
  }
})