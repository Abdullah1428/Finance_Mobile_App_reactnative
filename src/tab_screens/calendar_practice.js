import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 
 
export default class calendar_screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}
 
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <View style={{
            marginTop:hp('5%'),
            width: wp('100%'),
            height: this.isIphoneX() ? hp('50%') : hp('60%'),
            borderRadius: 30,
            borderWidth: 2,
            backgroundColor: '#14274A',
            borderColor:'#14274A',
        }}>

        <CalendarPicker
          onDateChange={this.onDateChange}
          textStyle={{
            color: 'white',
          }}
          todayBackgroundColor="#FDF002"
          selectedDayColor="#FC6400"
        />

        <View style={{alignSelf:'center'}}>
            <TouchableOpacity onPress={console.log('hello')}>
                <Image
      			    style={{alignSelf:'center'}}
      			    source = {require('../screen_assets/pay_transfer_screen/cancel.png')}
      		    />
            </TouchableOpacity>       
        </View>

        </View>
        
 
        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23395C',
  },
});