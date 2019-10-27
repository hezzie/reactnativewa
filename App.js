import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, ImageBackground} from 'react-native';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',data:''};
  }
  findCity = async() => {
    try{
      const response = await axios.get( `http://api.openweathermap.org/data/2.5/forecast?q=kigali&APPID=7f6a0fe6f25df85a9176f605964e2fb0`)
      console.debug('============>',response)
      this.setState({data:response.data})
    }catch(error){
console.debug('++++++++++++++++++++++>',error)
    }
  }
  componentDidMount(){
    this.findCity()
  }
  render() {
    this.findCity()
    console.debug('============>',this.state)
    return (
      <ImageBackground
        source={require('./giphy.gif')}
        style={styles.MainContainer}>
        <View style={styles.upper}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text
              .split(' ')
              .map(word => word && '🍕')
              .join(' ')}
          </Text>
          <Text>fuck</Text>
        </View>
        <View style={styles.lower}>
          <Text>Hello</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  upper: {
    width: '100%',
    height: '30%',
  },
  lower: {
    height: '70%',
    width: '100%',
  },
});
