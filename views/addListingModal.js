import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import AddListingCard from '../components/addListingCard';

import { addListingToServer } from '../utils/apiClientService';

export default function AddListing ({navigation}) {
  
  const defaultFormInput = {
    country: '',
    city: '',
    address: '',
    numberRoommates: '',
    monthlyRent: '',
    dateBegin: '',
    dateEnd: '',
    description: '',
    gender: '',
    sharedRoom: false,
  }
  const [ formInput, setFormInput ] = useState(defaultFormInput);

  const handleAdd = () => {
    // verify inputs
    addListingToServer(formInput)
      .then(res => {
        console.log(res);
        if (res === 'OK');
        alert('listing added');
        // should update listings (mine)
        navigation.goBack();
      })
      .catch(e => {
        console.log('error in adding listing', e);
      })
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}
      >
        <View style={styles.parentContainer}>  
          <View style={styles.container}>
 
          <Text style={styles.title}>add your own listing</Text>

            {/* USE PICKER HERE OR GOOGLE MAPS API MAKES THINGS EASIER */}
            <TextInput style={styles.input} placeholder='country'
            autoCompleteType='off' autoCapitalize='sentences'
            onChangeText={(country) => setFormInput({ ...formInput, country: country
            })} value={formInput.country} />

            <TextInput style={styles.input} placeholder='city'
            autoCompleteType='off' autoCapitalize='sentences'
            onChangeText={(city) => setFormInput({ ...formInput, city: city
            })} value={formInput.city} />

            <TextInput style={styles.input} placeholder='street and number'
            autoCompleteType='street-address' autoCapitalize='sentences'
            onChangeText={(address) => setFormInput({ ...formInput, address: address
            })} value={formInput.address} />

            <TextInput style={styles.input} placeholder='number of roommates'
            autoCompleteType='off' keyboardType='number-pad'
            onChangeText={(numberRoommates) => setFormInput({ ...formInput, numberRoommates: numberRoommates})}
            value={String(formInput.numberRoommates)} />

            <TextInput style={styles.input} placeholder='monthly rent'
            autoCompleteType='off' keyboardType='number-pad'
            onChangeText={(monthlyRent) => setFormInput({ ...formInput, monthlyRent: monthlyRent})} 
            value={String(formInput.monthlyRent)} />

            {/*<DatePickerIOS
              date={formInput.dateBegin}
              onDateChange={(newDate) => setFormInput({...formInput, dateBegin: newDate})}
            />*/}

            <TextInput style={styles.input} placeholder='date begin'
            autoCompleteType='off' autoCapitalize='sentences' multiline={true}
            onChangeText={(dateBegin) => setFormInput({ ...formInput, dateBegin: dateBegin
            })} value={formInput.dateBegin} />

            <TextInput style={styles.input} placeholder='date end (optional)'
            autoCompleteType='off' autoCapitalize='sentences' multiline={true}
            onChangeText={(dateEnd) => setFormInput({ ...formInput, dateEnd: dateEnd
            })} value={formInput.dateEnd} />

            <TextInput style={styles.input} placeholder='small description'
            autoCompleteType='off' autoCapitalize='sentences' multiline={true}
            onChangeText={(description) => setFormInput({ ...formInput, description: description
            })} value={formInput.description} />

            <Text style={{fontWeight: '500', paddingLeft: 10, fontSize: 22, marginTop: 10}}>add an image</Text>

          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Cancel'
              style={styles.buttonCancel}
              onPress={() => navigation.goBack()}
            />
            <Button
              title='Add'
              style={styles.buttonAdd}
              onPress={() => {
                handleAdd();
                /*navigation.goBack();*/
              }}
            />
          </View>
        </View>  
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const height = '100%';
const width = '100%';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    height: 540,
    width: 340,
    padding: 20,
    marginTop: 80,
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
    fontWeight: '500',
    paddingLeft: 10,
    fontSize: 30
  },
  input: {
    backgroundColor: '#ededed',
    paddingLeft: 17,
    marginVertical: 5,
    textAlignVertical: 'center',
    borderRadius: 20,
    height: 37,
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  buttonCancel: {
    backgroundColor: 'lightgrey',
  },
  buttonAdd: {
    backgroundColor: 'grey',
  }
})