import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }from 'react-native-responsive-screen'; 

import Ionicons from 'react-native-vector-icons/Ionicons';
 
const calendar_screen = ({navigation}) => {

    const amu = navigation.getParam('amu');
    const Fe = navigation.getParam('Fe');

    const [selectedStartDate , setselectedStartDate] = useState (null)

    const isIphoneX = () => {
        
    const dimen = Dimensions.get('window')
    
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && 
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}
 
  const onDateChange = (date) => {
    setselectedStartDate(date)
  }
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';

  const handle_cancel = () => {
    if(selectedStartDate)
    {
        navigation.navigate('review_payee',{amu:amu,Fe:Fe,date:startDate})
    }
    else
    {
        navigation.navigate('review_payee',{amu:amu,Fe:Fe,date:Date()})
    }
  }

  
  
    return (
        <SafeAreaView>
        <ImageBackground source={require('../screen_assets/email_screen/blue_bg.png')} style={{width: wp('100%'),height:hp('100%')}}>
            <View style={{
                marginTop:hp('5%'),
                width: wp('100%'),
                height: hp('100%'),
                borderRadius: 30,
                borderWidth: 2,
                backgroundColor: '#14274A',
                borderColor:'#14274A',
            }}>   
                <View style={{marginTop:hp('2%')}}/>
                <View style={{alignSelf:'center',flexDirection:'row'}}>
                    <View>
                    <Text style={{color:'white',fontSize:16}}>
                        Pay & transfer
                    </Text>
                    </View>
                    <View style={{left:wp('50%'),position:'absolute'}}>
                    <TouchableOpacity>
                    <Ionicons name="md-close" color='white' size={20}/>
                    </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{marginTop:hp('2%')}}/>
                <View style={{alignSelf:'center'}}>
                    <Text style={{color:'#EAE9E6',fontSize:12}}>
                        Select a paymemt date up to 31 days from today
                    </Text>
                </View>

                <View style={{
                    marginTop:hp('5%'),
                    width: wp('100%'),
                    height: isIphoneX() ? hp('50%') : hp('60%'),
                    borderRadius: 30,
                    borderWidth: 2,
                    backgroundColor: '#23395C',
                    borderColor:'#14274A',
                }}>

                <CalendarPicker
                    onDateChange={onDateChange}
                    textStyle={{
                    color: 'white',
                    }}
                    todayBackgroundColor="#FDF002"
                    selectedDayColor="#FC6400"
                />

                <View style={{alignSelf:'center'}}>
                    <TouchableOpacity onPress={handle_cancel}>
                        <Image
      			            style={{alignSelf:'center'}}
      			            source = {require('../screen_assets/pay_transfer_screen/cancel.png')}
      		            />
                    </TouchableOpacity>       
                </View>

                </View>

        </View>
        </ImageBackground>
        </SafeAreaView>

    );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23395C',
  },
});

export default calendar_screen;

/*
<View>
                    <Text style={{color:'#EAE9E6',fontSize:12}}>
                        {startDate}
                    </Text>
                </View>
*/