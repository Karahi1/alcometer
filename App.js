import { Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Radiobutton from './components/Radiobutton';
import StyleSheet from './Styles';


export default function App() {

  const [weight, setWeight] = useState(0)
  const [bottle, setBottle] = useState(0)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male')
  const [alcohol, setAlcohol] = useState(0)
  const [color, setColor] = useState('black')


  const bottles = [
    {label: '1 bottle', value: 1},
    {label: '2 bottles', value: 2},
    {label: '3 bottles', value: 3},
    {label: '4 bottles', value: 4},
    {label: '5 bottles', value: 5},
    {label: '6 bottles', value: 6},
    {label: '7 bottles', value: 7},
    {label: '8 bottles', value: 8},
    {label: '9 bottles', value: 9},
    {label: '10 bottles', value: 10},
  ]

  const hours = [
    {label: '1 hour', value: 1},
    {label: '2 hours', value: 2},
    {label: '3 hours', value: 3},
    {label: '4 hours', value: 4},
    {label: '5 hours', value: 5},
    {label: '6 hours', value: 6},
    {label: '7 hours', value: 7},
    {label: '8 hours', value: 8},
    {label: '9 hours', value: 9},
    {label: '10 hours', value: 10},
  ]

  const genders = [
    {label: 'Male', value:'male'},
    {label: 'Female', value: 'female'},
  ]

   const calculate = () => {
    let result = 0

    if (weight == 0 || '') {
      Alert.alert('No weight entered', 'please enter weight',[
        {
        text: 'OK',
        }
      ]);
    }
    if (gender === 'male') {
      result = (((bottle * 0.33) * 8 * 4.5) - (time * (weight/10)))/(weight * 0.7)
    } else {
      result = (((bottle * 0.33) * 8 * 4.5) - (time * (weight/10)))/(weight * 0.6)
    }
    if (result < 0){
      result = 0
    }

   if (result == 0) {
    setColor('green')
   } else if (result < 0.5) {
    setColor('yellow')
   } else {
    setColor('red')
   }
    setAlcohol(result)
  }

 
  return (       
    <View style={StyleSheet.container}>
      <ScrollView>
        <Text style={StyleSheet.headline}>Alcometer</Text>
        <Text style={StyleSheet.topic}>Weight</Text>
        <TextInput style={StyleSheet.textInPut} placeholder='Enter weight...' value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad' />
        <Text style={StyleSheet.topic}>Bottles</Text>
        <Picker
          style={StyleSheet.picker}
          onValueChange={(itemValue) => setBottle(itemValue)} 
          selectedValue={bottle}>
          {
            bottles.map((bottle, index) => (
              <Picker.Item key={index} label={bottle.label} value={bottle.value} />
            ))
          }
        </Picker>
        <Text style={StyleSheet.topic}>Time</Text>
        <Picker
          style={StyleSheet.picker}
          onValueChange={(itemValue) => setTime(itemValue)} 
          selectedValue={time}>
          {
            hours.map((time, index) => (
              <Picker.Item key={index} label={time.label} value={time.value} />
            ))
          }
        </Picker>        
        <Text style={StyleSheet.topic}>Gender</Text>
        <Radiobutton genders={genders} onPress={(value) => {setGender(value)}} initialValue={0}/>
        <Text style={{
            fontSize: 60,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
            color: color,
        }}>
         {alcohol.toFixed(2)}</Text>
        <Button title="Calculate" onPress={calculate} />
      </ScrollView>
    </View>
    
  );
}
